"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch = void 0;
const path = require("path");
const appInsightsClient_1 = require("./appInsightsClient");
const executor_1 = require("./executor");
const logger_1 = require("./logger");
const testResultsFile_1 = require("./testResultsFile");
const utility_1 = require("./utility");
class Watch {
    constructor(testCommands, testDirectories) {
        this.testCommands = testCommands;
        this.testDirectories = testDirectories;
        this.watchedDirectories = [];
        if (utility_1.Utility.getConfiguration().get("autoWatch")) {
            this.testCommands.onTestDiscoveryFinished(this.setupWatcherForAllDirectories, this);
        }
    }
    setupWatcherForAllDirectories() {
        const allDirectories = this.testDirectories.getTestDirectories();
        for (let i = 0; i < allDirectories.length; i++) {
            this.setupWatch(allDirectories[i], this.getNamespaceForTestDirectory(allDirectories[i]), i);
        }
    }
    setupWatch(testDirectory, namespaceForDirectory, index) {
        if (this.watchedDirectories.some((wd) => wd === testDirectory)) {
            logger_1.Logger.Log("Skipping adding watch since already watching directory " + testDirectory);
            return;
        }
        logger_1.Logger.Log("Starting watch for " + testDirectory);
        const trxPath = path.join(this.testCommands.testResultFolder, `autoWatch${index}.trx`);
        appInsightsClient_1.AppInsightsClient.sendEvent("runWatchCommand");
        const command = `dotnet watch test ${utility_1.Utility.additionalArgumentsOption}`
            + ` --verbosity:quiet` // be less verbose to avoid false positives when parsing output
            + ` --logger "trx;LogFileName=${trxPath}"`;
        logger_1.Logger.Log(`Executing ${command} in ${testDirectory}`);
        const p = executor_1.Executor.exec(command, (err, stdout) => {
            logger_1.Logger.Log(stdout);
        }, testDirectory, true);
        let startedLine = [];
        p.stdout.on("data", (buf) => __awaiter(this, void 0, void 0, function* () {
            const stdout = String(buf);
            // The string contained in `buf` may contain less or more
            // than one line. But we want to parse lines as a whole.
            // Consequently, we have to join them.
            const lines = [];
            let lastLineStart = 0;
            for (let i = 0; i < stdout.length; i++) {
                const c = stdout[i];
                if (c === "\r" || c === "\n") {
                    startedLine.push(stdout.substring(lastLineStart, i));
                    const line = startedLine.join("");
                    startedLine = [];
                    lines.push(line);
                    if (c === "\r" && stdout[i + 1] === "\n") {
                        i++;
                    }
                    lastLineStart = i + 1;
                }
            }
            startedLine.push(stdout.substring(lastLineStart, stdout.length));
            // Parse the output.
            for (const line of lines) {
                logger_1.Logger.Log(`dotnet watch: ${line}`);
                if (line === "watch : Started") {
                    this.testCommands.sendRunningTest({ testName: namespaceForDirectory, isSingleTest: false });
                }
                else if (line === `Results File: ${trxPath}`) {
                    logger_1.Logger.Log("Results file detected.");
                    const results = yield testResultsFile_1.parseResults(trxPath);
                    this.testCommands.sendNewTestResults({ clearPreviousTestResults: false, testResults: results });
                }
                else if (line.indexOf(": error ") > -1) {
                    this.testCommands.sendBuildFailed({ testName: namespaceForDirectory, isSingleTest: false });
                }
            }
        }));
        p.stdout.on("close", (buf) => {
            logger_1.Logger.Log("Stopping watch");
            this.watchedDirectories = this.watchedDirectories.filter((wd) => wd !== testDirectory);
        });
    }
    getNamespaceForTestDirectory(testDirectory) {
        const firstTestForDirectory = this.testDirectories.getFirstTestForDirectory(testDirectory);
        return firstTestForDirectory.substring(0, firstTestForDirectory.indexOf(".") - 1);
    }
}
exports.Watch = Watch;
//# sourceMappingURL=watch.js.map
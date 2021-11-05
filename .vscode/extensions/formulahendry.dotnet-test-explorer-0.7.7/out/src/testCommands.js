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
exports.TestCommands = void 0;
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const vscode = require("vscode");
const vscode_1 = require("vscode");
const appInsightsClient_1 = require("./appInsightsClient");
const executor_1 = require("./executor");
const logger_1 = require("./logger");
const testDiscovery_1 = require("./testDiscovery");
const testResultsFile_1 = require("./testResultsFile");
const utility_1 = require("./utility");
class TestCommands {
    constructor(testDirectories) {
        this.testDirectories = testDirectories;
        this.onTestDiscoveryStartedEmitter = new vscode_1.EventEmitter();
        this.onTestDiscoveryFinishedEmitter = new vscode_1.EventEmitter();
        this.onTestRunEmitter = new vscode_1.EventEmitter();
        this.onNewTestResultsEmitter = new vscode_1.EventEmitter();
        this.onBuildFailedEmitter = new vscode_1.EventEmitter();
        this.lastRunTestContext = null;
    }
    dispose() {
        try {
            if (this.testResultsFolderWatcher) {
                this.testResultsFolderWatcher.close();
            }
        }
        catch (err) {
        }
    }
    discoverTests() {
        this.onTestDiscoveryStartedEmitter.fire("");
        this.testDirectories.clearTestsForDirectory();
        const testDirectories = this.testDirectories.getTestDirectories();
        this.isRunning = false;
        this.setupTestResultFolder();
        const runSeqOrAsync = () => __awaiter(this, void 0, void 0, function* () {
            const addToDiscoveredTests = (discoverdTestResult, dir) => {
                if (discoverdTestResult.testNames.length > 0) {
                    discoveredTests.push(discoverdTestResult);
                }
            };
            const discoveredTests = [];
            try {
                if (utility_1.Utility.runInParallel) {
                    yield Promise.all(testDirectories.map((dir) => __awaiter(this, void 0, void 0, function* () { return yield addToDiscoveredTests(yield this.discoverTestsInFolder(dir), dir); })));
                }
                else {
                    for (const dir of testDirectories) {
                        addToDiscoveredTests(yield this.discoverTestsInFolder(dir), dir);
                    }
                }
                this.onTestDiscoveryFinishedEmitter.fire(discoveredTests);
            }
            catch (error) {
                this.onTestDiscoveryFinishedEmitter.fire([]);
            }
        });
        runSeqOrAsync();
    }
    discoverTestsInFolder(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            const testsForDir = yield testDiscovery_1.discoverTests(dir, utility_1.Utility.additionalArgumentsOption);
            this.testDirectories.addTestsForDirectory(testsForDir.testNames.map((tn) => ({ dir, name: tn })));
            return testsForDir;
        });
    }
    get testResultFolder() {
        return this.testResultsFolder;
    }
    get onTestDiscoveryStarted() {
        return this.onTestDiscoveryStartedEmitter.event;
    }
    get onTestDiscoveryFinished() {
        return this.onTestDiscoveryFinishedEmitter.event;
    }
    get onTestRun() {
        return this.onTestRunEmitter.event;
    }
    get onBuildFail() {
        return this.onBuildFailedEmitter.event;
    }
    get onNewTestResults() {
        return this.onNewTestResultsEmitter.event;
    }
    sendNewTestResults(testResults) {
        this.onNewTestResultsEmitter.fire(testResults);
    }
    sendRunningTest(testContext) {
        this.onTestRunEmitter.fire(testContext);
    }
    sendBuildFailed(testContext) {
        this.onBuildFailedEmitter.fire(testContext);
    }
    runAllTests() {
        this.runTestCommand("", false);
        appInsightsClient_1.AppInsightsClient.sendEvent("runAllTests");
    }
    runTest(test) {
        this.runTestByName(test.fqn, !test.isFolder);
    }
    runTestByName(testName, isSingleTest) {
        this.runTestCommand(testName, isSingleTest);
        appInsightsClient_1.AppInsightsClient.sendEvent("runTest");
    }
    debugTestByName(testName, isSingleTest) {
        this.runTestCommand(testName, isSingleTest, true);
        appInsightsClient_1.AppInsightsClient.sendEvent("runTest");
    }
    rerunLastCommand() {
        if (this.lastRunTestContext != null) {
            this.runTestCommand(this.lastRunTestContext.testName, this.lastRunTestContext.isSingleTest);
            appInsightsClient_1.AppInsightsClient.sendEvent("rerunLastCommand");
        }
    }
    setupTestResultFolder() {
        if (!this.testResultsFolder) {
            this.testResultsFolder = fs.mkdtempSync(path.join(utility_1.Utility.pathForResultFile, "test-explorer-"));
        }
    }
    runTestCommand(testName, isSingleTest, debug) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isRunning) {
                logger_1.Logger.Log("Tests already running, ignore request to run tests for " + testName);
                return;
            }
            this.isRunning = true;
            vscode_1.commands.executeCommand("workbench.view.extension.test", "workbench.view.extension.test");
            const testDirectories = this
                .testDirectories
                .getTestDirectories(testName);
            if (testDirectories.length < 1) {
                this.isRunning = false;
                logger_1.Logger.LogWarning("Could not find a matching test directory for test " + testName);
                return;
            }
            logger_1.Logger.Log(`Test run for ${testName}`);
            for (const {} of testDirectories) {
                const testContext = { testName, isSingleTest };
                this.lastRunTestContext = testContext;
                this.sendRunningTest(testContext);
            }
            try {
                if (utility_1.Utility.runInParallel) {
                    yield Promise.all(testDirectories.map((dir, i) => __awaiter(this, void 0, void 0, function* () { return this.runTestCommandForSpecificDirectory(dir, testName, isSingleTest, i, debug); })));
                }
                else {
                    for (let i = 0; i < testDirectories.length; i++) {
                        yield this.runTestCommandForSpecificDirectory(testDirectories[i], testName, isSingleTest, i, debug);
                    }
                }
                const globPromise = new Promise((resolve, reject) => glob("*.trx", { cwd: this.testResultsFolder, absolute: true }, (err, matches) => err == null ? resolve(matches) : reject()));
                const files = yield globPromise;
                const allTestResults = [];
                for (const file of files) {
                    const testResults = yield testResultsFile_1.parseResults(file);
                    allTestResults.push(...testResults);
                }
                this.sendNewTestResults({ clearPreviousTestResults: testName === "", testResults: allTestResults });
            }
            catch (err) {
                logger_1.Logger.Log(`Error while executing test command: ${err}`);
                if (err.message === "Build command failed") {
                    vscode
                        .window
                        .showErrorMessage("Build failed. Fix your build and try to run the test(s) again", "Re-run test(s)")
                        .then(selection => {
                        if (selection !== undefined) {
                            vscode.commands.executeCommand("dotnet-test-explorer.rerunLastCommand");
                        }
                    });
                    ;
                    for (const {} of testDirectories) {
                        const testContext = { testName, isSingleTest };
                        this.lastRunTestContext = testContext;
                        this.sendBuildFailed(testContext);
                    }
                }
            }
            this.isRunning = false;
        });
    }
    runBuildCommandForSpecificDirectory(testDirectoryPath) {
        return new Promise((resolve, reject) => {
            if (utility_1.Utility.skipBuild) {
                logger_1.Logger.Log(`User has passed --no-build, skipping build`);
                resolve();
            }
            else {
                logger_1.Logger.Log(`Executing dotnet build in ${testDirectoryPath}`);
                executor_1.Executor.exec("dotnet build", (err, stdout) => {
                    if (err) {
                        reject(new Error("Build command failed"));
                    }
                    resolve();
                }, testDirectoryPath);
            }
        });
    }
    runTestCommandForSpecificDirectory(testDirectoryPath, testName, isSingleTest, index, debug) {
        const trxTestName = index + ".trx";
        return new Promise((resolve, reject) => {
            const testResultFile = path.join(this.testResultsFolder, trxTestName);
            let command = `dotnet test${utility_1.Utility.additionalArgumentsOption} --no-build --logger \"trx;LogFileName=${testResultFile}\"`;
            if (testName && testName.length) {
                if (isSingleTest) {
                    command = command + ` --filter "FullyQualifiedName=${testName.replace(/\(.*\)/g, "")}"`;
                }
                else {
                    command = command + ` --filter "FullyQualifiedName~${testName.replace(/\(.*\)/g, "")}"`;
                }
            }
            this.runBuildCommandForSpecificDirectory(testDirectoryPath)
                .then(() => {
                logger_1.Logger.Log(`Executing ${command} in ${testDirectoryPath}`);
                if (!debug) {
                    return executor_1.Executor.exec(command, (err, stdout) => {
                        if (err && err.killed) {
                            logger_1.Logger.Log("User has probably cancelled test run");
                            reject(new Error("UserAborted"));
                        }
                        logger_1.Logger.Log(stdout, "Test Explorer (Test runner output)");
                        resolve();
                    }, testDirectoryPath, true);
                }
                else {
                    return executor_1.Executor.debug(command, (err, stdout) => {
                        if (err && err.killed) {
                            logger_1.Logger.Log("User has probably cancelled test run");
                            reject(new Error("UserAborted"));
                        }
                        logger_1.Logger.Log(stdout, "Test Explorer (Test runner output)");
                        resolve();
                    }, testDirectoryPath, true);
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
}
exports.TestCommands = TestCommands;
//# sourceMappingURL=testCommands.js.map
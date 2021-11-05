"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInsights = void 0;
const fs = require("fs");
const glob = require("glob");
const appInsightsClient_1 = require("./appInsightsClient");
const logger_1 = require("./logger");
class AppInsights {
    constructor(testCommands, testDirectories) {
        this.testCommands = testCommands;
        this.testDirectories = testDirectories;
        if (appInsightsClient_1.AppInsightsClient.EnableTelemetry) {
            this.testDiscoveryFinishedEvent = this.testCommands.onTestDiscoveryFinished(this.telemetryDiscoveredTests, this);
        }
    }
    telemetryDiscoveredTests(results) {
        // Dispose to unsubscribe, we only try to report these metrics first time tests are discovered
        this.testDiscoveryFinishedEvent.dispose();
        const numberOfTests = [].concat(...results.map((r) => r.testNames)).length;
        if (numberOfTests < 1) {
            return;
        }
        const testDirectories = this.testDirectories.getTestDirectories();
        // Only look for the test framework in the first test direcoty. If users are using multiple test frameworks we don't care too much.
        const firstTestDirectory = testDirectories[0];
        glob(firstTestDirectory + "**/+(*.csproj|*.fsproj)", {}, (errorReadDirectory, files) => {
            if (!errorReadDirectory) {
                fs.readFile(files[0], (errorReadFile, data) => {
                    if (!errorReadFile) {
                        try {
                            const projContent = data.toString().toLowerCase();
                            let testFramework = "unknown";
                            if (projContent.includes("nunit")) {
                                testFramework = "nunit";
                            }
                            else if (projContent.includes("xunit")) {
                                testFramework = "xunit";
                            }
                            else if (projContent.includes("mstest")) {
                                testFramework = "mstest";
                            }
                            logger_1.Logger.Log(`Discovered tests with ${testFramework}. Found ${numberOfTests} in ${testDirectories.length} directories`);
                            appInsightsClient_1.AppInsightsClient.sendEvent("Discovered tests", { "Test framework": testFramework }, { Tests: numberOfTests, Directories: testDirectories.length });
                        }
                        catch (err) {
                            logger_1.Logger.LogError("Failed to send telemetry for discovered tests", err);
                        }
                    }
                });
            }
        });
    }
}
exports.AppInsights = AppInsights;
//# sourceMappingURL=appInsights.js.map
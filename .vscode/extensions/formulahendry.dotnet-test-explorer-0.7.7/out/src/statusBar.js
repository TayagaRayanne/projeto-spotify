"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBar = void 0;
const vscode = require("vscode");
class StatusBar {
    constructor(testCommand) {
        this.status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
        testCommand.onTestDiscoveryStarted(this.updateWithDiscoveringTest, this);
        testCommand.onBuildFail(this.updateWithBuildFail, this);
        this.status.command = "dotnet-test-explorer.openPanel";
        this.discovering();
    }
    discovering() {
        this.baseStatusText = "";
        this.status.text = `$(beaker) $(sync~spin) Discovering tests`;
        this.status.show();
    }
    buildFailed() {
        this.baseStatusText = "";
        this.status.text = `$(beaker) $(dialog-warning) Build failed. Tests not run!`;
        this.status.show();
    }
    discovered(numberOfTests) {
        this.baseStatusText = `$(beaker) ${numberOfTests} tests`;
        this.status.text = this.baseStatusText;
    }
    testRunning(numberOfTestRun) {
        this.status.text = `${this.baseStatusText} ($(sync~spin) Running ${numberOfTestRun} tests)`;
    }
    testRun(results) {
        const failed = results.filter((r) => r.outcome === "Failed").length;
        const notExecuted = results.filter((r) => r.outcome === "NotExecuted").length;
        const passed = results.filter((r) => r.outcome === "Passed").length;
        this.status.text = `${this.baseStatusText} ($(check) ${passed} | $(x) ${failed}) | $(question) ${notExecuted})`;
    }
    dispose() {
        if (this.status) {
            this.status.dispose();
        }
    }
    updateWithDiscoveringTest() {
        this.discovering();
    }
    updateWithBuildFail() {
        this.buildFailed();
    }
}
exports.StatusBar = StatusBar;
//# sourceMappingURL=statusBar.js.map
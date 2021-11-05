"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const appInsights_1 = require("./appInsights");
const appInsightsClient_1 = require("./appInsightsClient");
const dotnetTestExplorer_1 = require("./dotnetTestExplorer");
const executor_1 = require("./executor");
const findTestInContext_1 = require("./findTestInContext");
const gotoTest_1 = require("./gotoTest");
const leftClickTest_1 = require("./leftClickTest");
const logger_1 = require("./logger");
const problems_1 = require("./problems");
const statusBar_1 = require("./statusBar");
const testCommands_1 = require("./testCommands");
const testDirectories_1 = require("./testDirectories");
const testStatusCodeLensProvider_1 = require("./testStatusCodeLensProvider");
const utility_1 = require("./utility");
const watch_1 = require("./watch");
function activate(context) {
    const testDirectories = new testDirectories_1.TestDirectories();
    const testCommands = new testCommands_1.TestCommands(testDirectories);
    const gotoTest = new gotoTest_1.GotoTest();
    const findTestInContext = new findTestInContext_1.FindTestInContext();
    const problems = new problems_1.Problems(testCommands);
    const statusBar = new statusBar_1.StatusBar(testCommands);
    const watch = new watch_1.Watch(testCommands, testDirectories);
    const leftClickTest = new leftClickTest_1.LeftClickTest();
    const appInsights = new appInsights_1.AppInsights(testCommands, testDirectories);
    logger_1.Logger.Log("Starting extension");
    testDirectories.parseTestDirectories();
    context.subscriptions.push(problems);
    context.subscriptions.push(statusBar);
    context.subscriptions.push(testCommands);
    utility_1.Utility.updateCache();
    const dotnetTestExplorer = new dotnetTestExplorer_1.DotnetTestExplorer(context, testCommands, statusBar);
    vscode.window.registerTreeDataProvider("dotnetTestExplorer", dotnetTestExplorer);
    appInsightsClient_1.AppInsightsClient.sendEvent("loadExtension");
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((e) => {
        if (!e.affectsConfiguration("dotnet-test-explorer")) {
            return;
        }
        if (e.affectsConfiguration("dotnet-test-explorer.testProjectPath")) {
            testDirectories.parseTestDirectories();
            testCommands.discoverTests();
        }
        dotnetTestExplorer._onDidChangeTreeData.fire(null);
        utility_1.Utility.updateCache();
    }));
    testCommands.discoverTests();
    const codeLensProvider = new testStatusCodeLensProvider_1.TestStatusCodeLensProvider(testCommands);
    context.subscriptions.push(codeLensProvider);
    context.subscriptions.push(vscode.languages.registerCodeLensProvider({ language: "csharp", scheme: "file" }, codeLensProvider));
    context.subscriptions.push(vscode.languages.registerCodeLensProvider({ language: "fsharp", scheme: "file" }, codeLensProvider));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.showLog", () => {
        logger_1.Logger.Show();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.openPanel", () => {
        vscode.commands.executeCommand("workbench.view.extension.test");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.stop", () => {
        executor_1.Executor.stop();
        dotnetTestExplorer._onDidChangeTreeData.fire(null);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.refreshTestExplorer", () => {
        testDirectories.parseTestDirectories();
        dotnetTestExplorer.refreshTestExplorer();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.runAllTests", () => {
        testCommands.runAllTests();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.runTest", (test) => {
        testCommands.runTest(test);
    }));
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("dotnet-test-explorer.runTestInContext", (editor) => {
        findTestInContext.find(editor.document, editor.selection.start).then((testRunContext) => {
            testCommands.runTestByName(testRunContext.testName, testRunContext.isSingleTest);
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.gotoTest", (test) => {
        gotoTest.go(test);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.debugTest", (test) => {
        testCommands.debugTestByName(test.fqn, true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.rerunLastCommand", (test) => {
        testCommands.rerunLastCommand();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("dotnet-test-explorer.leftClickTest", (test) => {
        leftClickTest.handle(test);
    }));
    context.subscriptions.push(vscode.window.onDidCloseTerminal((closedTerminal) => {
        executor_1.Executor.onDidCloseTerminal(closedTerminal);
    }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotnetTestExplorer = void 0;
const path = require("path");
const vscode = require("vscode");
const appInsightsClient_1 = require("./appInsightsClient");
const buildTree_1 = require("./buildTree");
const parseTestName_1 = require("./parseTestName");
const testNode_1 = require("./testNode");
const utility_1 = require("./utility");
class DotnetTestExplorer {
    constructor(context, testCommands, statusBar) {
        this.context = context;
        this.testCommands = testCommands;
        this.statusBar = statusBar;
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.testNodes = [];
        testCommands.onTestDiscoveryFinished(this.updateWithDiscoveredTests, this);
        testCommands.onTestDiscoveryStarted(this.updateWithDiscoveringTest, this);
        testCommands.onTestRun(this.updateTreeWithRunningTests, this);
        testCommands.onBuildFail(this.updateTreeWithNotRunTests, this);
        testCommands.onNewTestResults(this.addTestResults, this);
    }
    /**
     * @description
     * Refreshes the test explorer pane by running the
     * `dotnet test` command and requesting information about
     * discovered tests.
     * @summary
     * This method can cause the project to rebuild or try
     * to do a restore, so it can be very slow.
     */
    refreshTestExplorer() {
        this.testCommands.discoverTests();
        appInsightsClient_1.AppInsightsClient.sendEvent("refreshTestExplorer");
    }
    getTreeItem(element) {
        // if (element.isError) {
        //     return new TreeItem(element.name);
        // }
        return {
            label: element.name,
            collapsibleState: element.isFolder ? utility_1.Utility.defaultCollapsibleState : void 0,
            iconPath: element.icon ? {
                dark: this.context.asAbsolutePath(path.join("resources", "dark", element.icon)),
                light: this.context.asAbsolutePath(path.join("resources", "light", element.icon)),
            } : void 0,
            contextValue: element.isFolder ? "folder" : "test",
            command: element.isFolder ? null : {
                command: "dotnet-test-explorer.leftClickTest",
                title: "",
                arguments: [element],
            },
        };
    }
    getChildren(element) {
        if (element) {
            return element.children;
        }
        if (!this.discoveredTests) {
            const loadingNode = new testNode_1.TestNode("", "Discovering tests", this.testResults);
            loadingNode.setIcon(testNode_1.TestNodeIcon.Running);
            return [loadingNode];
        }
        if (this.discoveredTests.length === 0) {
            // Show the welcome message.
            return [];
        }
        const treeMode = utility_1.Utility.getConfiguration().get("treeMode");
        if (treeMode === "flat") {
            return this.testNodes = this.discoveredTests.map((name) => {
                return new testNode_1.TestNode("", name, this.testResults);
            });
        }
        const parsedTestNames = this.discoveredTests.map(parseTestName_1.parseTestName);
        let tree = buildTree_1.buildTree(parsedTestNames);
        if (treeMode === "merged") {
            tree = buildTree_1.mergeSingleItemTrees(tree);
        }
        this.testNodes = [];
        const concreteRoot = this.createConcreteTree("", tree);
        return concreteRoot.children;
    }
    createConcreteTree(parentNamespace, abstractTree) {
        const children = [];
        for (const subNamespace of abstractTree.subTrees.values()) {
            children.push(this.createConcreteTree(abstractTree.fullName, subNamespace));
        }
        for (const test of abstractTree.tests) {
            const testNode = new testNode_1.TestNode(abstractTree.fullName, test, this.testResults);
            this.testNodes.push(testNode);
            children.push(testNode);
        }
        return new testNode_1.TestNode(parentNamespace, abstractTree.name, this.testResults, children);
    }
    updateWithDiscoveringTest() {
        this.discoveredTests = null;
        this._onDidChangeTreeData.fire(null);
    }
    updateWithDiscoveredTests(results) {
        this.testNodes = [];
        this.discoveredTests = [].concat(...results.map((r) => r.testNames));
        this.statusBar.discovered(this.discoveredTests.length);
        this._onDidChangeTreeData.fire(null);
    }
    updateTreeWithRunningTests(testRunContext) {
        const runningTests = this.getNodesMatchingTestRun(testRunContext);
        this.statusBar.testRunning(runningTests.length);
        runningTests.forEach((testNode) => {
            testNode.setIcon(testNode_1.TestNodeIcon.Running);
            this._onDidChangeTreeData.fire(testNode);
        });
    }
    updateTreeWithNotRunTests(testRunContext) {
        const runningTests = this.getNodesMatchingTestRun(testRunContext);
        runningTests.forEach((testNode) => {
            testNode.setIcon(testNode_1.TestNodeIcon.TestNotRun);
            this._onDidChangeTreeData.fire(testNode);
        });
    }
    getNodesMatchingTestRun(testRunContext) {
        const filter = testRunContext.isSingleTest ?
            ((testNode) => testNode.fqn === testRunContext.testName)
            : ((testNode) => testNode.fullName.startsWith(testRunContext.testName));
        return this.testNodes.filter((testNode) => !testNode.isFolder && filter(testNode));
    }
    addTestResults(results) {
        const fullNamesForTestResults = results.testResults.map((r) => r.fullName);
        if (results.clearPreviousTestResults) {
            this.discoveredTests = [...fullNamesForTestResults];
            this.testResults = null;
        }
        else {
            const newTests = fullNamesForTestResults.filter((r) => this.discoveredTests.indexOf(r) === -1);
            if (newTests.length > 0) {
                this.discoveredTests.push(...newTests);
            }
        }
        this.discoveredTests = this.discoveredTests.sort();
        this.statusBar.discovered(this.discoveredTests.length);
        if (this.testResults) {
            results.testResults.forEach((newTestResult) => {
                const indexOldTestResult = this.testResults.findIndex((tr) => tr.fullName === newTestResult.fullName);
                if (indexOldTestResult < 0) {
                    this.testResults.push(newTestResult);
                }
                else {
                    this.testResults[indexOldTestResult] = newTestResult;
                }
            });
        }
        else {
            this.testResults = results.testResults;
        }
        this.statusBar.testRun(results.testResults);
        this._onDidChangeTreeData.fire(null);
    }
}
exports.DotnetTestExplorer = DotnetTestExplorer;
//# sourceMappingURL=dotnetTestExplorer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestNode = exports.TestNodeIcon = void 0;
const utility_1 = require("./utility");
var TestNodeIcon;
(function (TestNodeIcon) {
    TestNodeIcon["Namespace"] = "namespace.png";
    TestNodeIcon["NamespaceFailed"] = "namespaceFailed.png";
    TestNodeIcon["NamespaceNotExecuted"] = "namespaceNotExecuted.png";
    TestNodeIcon["NamespacePassed"] = "namespacePassed.png";
    TestNodeIcon["Run"] = "run.png";
    TestNodeIcon["Running"] = "spinner.svg";
    TestNodeIcon["TestNotRun"] = "testNotRun.png";
})(TestNodeIcon = exports.TestNodeIcon || (exports.TestNodeIcon = {}));
class TestNode {
    constructor(_parentNamespace, _name, testResults, _children) {
        this._parentNamespace = _parentNamespace;
        this._name = _name;
        this._children = _children;
        this.setIconFromTestResult(testResults);
        this._fqn = utility_1.Utility
            .getFqnTestName(this.fullName)
            .replace("+", "."); // nested classes are reported as ParentClass+ChildClass;
    }
    get name() {
        return this._name;
    }
    get fullName() {
        return (this._parentNamespace ? `${this._parentNamespace}.` : "") + this._name;
    }
    get fqn() {
        // We need to translate from how the test is represented in the tree to what it's fully qualified name is
        return this._fqn;
    }
    get parentNamespace() {
        return this._parentNamespace;
    }
    get isFolder() {
        return this._children && this._children.length > 0;
    }
    get children() {
        return this._children;
    }
    get icon() {
        return this._icon;
        // if(this._isUnknown) {
        //     return TestNodeIcon.TestNotRun;
        // } else if(this._isLoading) {
        //     return TestNodeIcon.Running;
        // } else {
        //     return this._icon;
        // }
    }
    // public setAsLoading() {
    //     this._isUnknown = false;
    //     this._isLoading = true;
    // }
    // public getIsLoading() {
    //     return this._isLoading;
    // }
    // public setAsUnknown() {
    //     this._isUnknown = true;
    // }
    setIcon(icon) {
        this._icon = icon;
    }
    setIconFromTestResult(testResults) {
        this._isLoading = false;
        this._isUnknown = false;
        if (!testResults) {
            this._icon = this.isFolder ? TestNodeIcon.Namespace : TestNodeIcon.Run;
        }
        else {
            if (this.isFolder) {
                const testsForFolder = testResults.filter((tr) => tr.fullName.startsWith(this.fullName));
                if (testsForFolder.some((tr) => tr.outcome === "Failed")) {
                    this._icon = TestNodeIcon.NamespaceFailed;
                }
                else if (testsForFolder.some((tr) => tr.outcome === "NotExecuted")) {
                    this._icon = TestNodeIcon.NamespaceNotExecuted;
                }
                else if (testsForFolder.some((tr) => tr.outcome === "Passed")) {
                    this._icon = TestNodeIcon.NamespacePassed;
                }
                else {
                    this._icon = TestNodeIcon.Namespace;
                }
            }
            else {
                const resultForTest = testResults.find((tr) => tr.fullName === this.fullName);
                if (resultForTest) {
                    this._icon = "test".concat(resultForTest.outcome, ".png");
                }
                else {
                    this._icon = TestNodeIcon.TestNotRun;
                }
            }
        }
    }
}
exports.TestNode = TestNode;
//# sourceMappingURL=testNode.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const os_1 = require("os");
const path = require("path");
const vscode = require("vscode");
class Utility {
    static get codeLensEnabled() {
        return Utility.showCodeLens;
    }
    static get codeLensFailed() {
        return Utility.failed;
    }
    static get codeLensPassed() {
        return Utility.passed;
    }
    static get codeLensSkipped() {
        return Utility.skipped;
    }
    static get defaultCollapsibleState() {
        return Utility.autoExpandTree ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.Collapsed;
    }
    static get pathForResultFile() {
        const pathForResultFile = Utility.getConfiguration().get("pathForResultFile");
        return pathForResultFile ? this.resolvePath(pathForResultFile) : os_1.tmpdir();
    }
    static get additionalArgumentsOption() {
        const testArguments = Utility.getConfiguration().get("testArguments");
        return (testArguments && testArguments.length > 0) ? ` ${testArguments}` : "";
    }
    static getConfiguration() {
        return vscode.workspace.getConfiguration("dotnet-test-explorer");
    }
    static getFqnTestName(testName) {
        // Converts a test name to a fqn version
        // For instance MyNameSpace.Class("Nunit fixture").TestName("With some arguments here") => MyNameSpace.Class.TestName
        return testName
            .split(/\.(?![^\(]*\))/g) // Split on all . that are not in paranthesis
            .map((n) => {
            let name = n;
            const firstParanthesis = name.indexOf("(");
            if (firstParanthesis > -1) {
                name = name.substring(0, firstParanthesis);
            }
            return name;
        })
            .join(".");
    }
    static updateCache() {
        const configuration = Utility.getConfiguration();
        const osx = os_1.platform() === "darwin";
        Utility.showCodeLens = configuration.get("showCodeLens", true);
        Utility.failed = Utility.getLensText(configuration, "codeLensFailed", "\u274c"); // Cross Mark
        Utility.passed = Utility.getLensText(configuration, "codeLensPassed", osx ? "\u2705" : "\u2714"); // White Heavy Check Mark / Heavy Check Mark
        Utility.skipped = Utility.getLensText(configuration, "codeLensSkipped", "\u26a0"); // Warning
        Utility.autoExpandTree = configuration.get("autoExpandTree", false);
        Utility.skipBuild = Utility.additionalArgumentsOption.indexOf("--no-build") > -1;
        Utility.runInParallel = configuration.get("runInParallel", false);
    }
    /**
     * @description
     * Checks to see if the @see{vscode.workspace.rootPath} is
     * the same as the directory given, and resolves the correct
     * string to it if not.
     * @param dir
     * The directory specified in the options.
     */
    static resolvePath(dir) {
        return path.isAbsolute(dir)
            ? dir
            : path.resolve(vscode.workspace.rootPath, dir);
    }
    static getLensText(configuration, name, fallback) {
        // This is an invisible character that indicates the previous character
        // should be displayed as an emoji, which in our case adds some colour
        const emojiVariation = "\ufe0f";
        const setting = configuration.get(name);
        return setting ? setting : (fallback + emojiVariation);
    }
}
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotoTest = void 0;
const vscode = require("vscode");
const appInsightsClient_1 = require("./appInsightsClient");
const logger_1 = require("./logger");
class GotoTest {
    constructor() {
        this.fsharpSymbolKinds = [vscode.SymbolKind.Variable, vscode.SymbolKind.Field, vscode.SymbolKind.Method];
    }
    go(test) {
        appInsightsClient_1.AppInsightsClient.sendEvent("gotoTest");
        const symbolInformation = vscode.commands.executeCommand("vscode.executeWorkspaceSymbolProvider", test.fqn).then((symbols) => {
            let symbol;
            try {
                symbol = this.findTestLocation(symbols, test);
                vscode.workspace.openTextDocument(symbol.location.uri).then((doc) => {
                    vscode.window.showTextDocument(doc).then((editor) => {
                        const loc = symbol.location.range;
                        const selection = new vscode.Selection(loc.start.line, loc.start.character, loc.start.line, loc.end.character);
                        vscode.window.activeTextEditor.selection = selection;
                        vscode.window.activeTextEditor.revealRange(selection, vscode.TextEditorRevealType.InCenter);
                    });
                });
            }
            catch (r) {
                logger_1.Logger.Log(r.message);
                vscode.window.showWarningMessage(r.message);
            }
        });
    }
    findTestLocation(symbols, testNode) {
        if (symbols.length === 0) {
            throw new Error("Could not find test (no symbols found)");
        }
        const testFqn = testNode.fqn;
        symbols = symbols.filter((s) => this.isSymbolATestCandidate(s) && testFqn.endsWith(this.getTestMethodFqn(s.name)));
        if (symbols.length === 0) {
            throw Error("Could not find test (no symbols matching)");
        }
        if (symbols.length > 1) {
            throw Error("Could not find test (found multiple matching symbols)");
        }
        return symbols[0];
    }
    getTestMethodFqn(testName) {
        // The symbols are reported on the form Method or Method(string, int) (in case of test cases etc).
        // We are only interested in the method name, not its arguments
        const firstParanthesis = testName.indexOf("(");
        if (firstParanthesis > -1) {
            testName = testName.substring(0, firstParanthesis);
        }
        return testName;
    }
    isSymbolATestCandidate(s) {
        return s.location.uri.toString().endsWith(".fs") ? this.fsharpSymbolKinds.includes(s.kind) : s.kind === vscode.SymbolKind.Method;
    }
}
exports.GotoTest = GotoTest;
//# sourceMappingURL=gotoTest.js.map
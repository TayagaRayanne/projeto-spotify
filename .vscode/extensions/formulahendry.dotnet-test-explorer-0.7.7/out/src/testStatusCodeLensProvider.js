"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestStatusCodeLensProvider = void 0;
const vscode_1 = require("vscode");
const symbols_1 = require("./symbols");
const testStatusCodeLens_1 = require("./testStatusCodeLens");
const utility_1 = require("./utility");
class TestStatusCodeLensProvider {
    constructor(testCommands) {
        this.disposables = [];
        this.onDidChangeCodeLensesEmitter = new vscode_1.EventEmitter();
        this.fsharpSymbolKinds = [vscode_1.SymbolKind.Field, vscode_1.SymbolKind.Variable, vscode_1.SymbolKind.Method];
        // Store everything in a map so we can remember old tests results for the
        // scenario where a single test is ran. If the test no longer exists in
        // code it will never be mapped to the symbol, so no harm (though there is
        // a memory impact)
        this.testResults = new Map();
        this.disposables.push(testCommands.onNewTestResults(this.addTestResults, this));
    }
    dispose() {
        while (this.disposables.length) {
            this.disposables.pop().dispose();
        }
    }
    get onDidChangeCodeLenses() {
        return this.onDidChangeCodeLensesEmitter.event;
    }
    provideCodeLenses(document, token) {
        if (!utility_1.Utility.codeLensEnabled) {
            return [];
        }
        const symbolFilter = document.languageId === 'fsharp'
            ? ((x) => this.fsharpSymbolKinds.includes(x.documentSymbol.kind))
            : ((x) => x.documentSymbol.kind === vscode_1.SymbolKind.Method);
        const results = this.testResults;
        return symbols_1.Symbols.getSymbols(document.uri, true)
            .then((symbols) => {
            const mapped = [];
            for (const symbol of symbols.filter((x) => symbolFilter(x))) {
                for (const result of results.values()) {
                    if (result.matches(symbol.parentName, symbol.documentSymbol.name)) {
                        const state = testStatusCodeLens_1.TestStatusCodeLens.parseOutcome(result.outcome);
                        if (state) {
                            mapped.push(new testStatusCodeLens_1.TestStatusCodeLens(symbol.documentSymbol.selectionRange, state));
                            break;
                        }
                    }
                    else if (result.matchesTheory(symbol.parentName, symbol.documentSymbol.name)) {
                        const state = testStatusCodeLens_1.TestStatusCodeLens.parseOutcome(result.outcome);
                        if (state === utility_1.Utility.codeLensFailed) {
                            mapped.push(new testStatusCodeLens_1.TestStatusCodeLens(symbol.documentSymbol.selectionRange, utility_1.Utility.codeLensFailed));
                            break;
                        }
                        else {
                            // Checks if any input values for this theory fails
                            for (const theoryResult of results.values()) {
                                if (theoryResult.matchesTheory(symbol.parentName, symbol.documentSymbol.name)) {
                                    if (theoryResult.outcome === utility_1.Utility.codeLensFailed) {
                                        mapped.push(new testStatusCodeLens_1.TestStatusCodeLens(symbol.documentSymbol.selectionRange, utility_1.Utility.codeLensFailed));
                                        break;
                                    }
                                }
                            }
                        }
                        mapped.push(new testStatusCodeLens_1.TestStatusCodeLens(symbol.documentSymbol.selectionRange, state));
                    }
                }
            }
            return mapped;
        });
    }
    resolveCodeLens(codeLens, token) {
        return codeLens;
    }
    addTestResults(results) {
        for (const result of results.testResults) {
            this.testResults.set(result.fullName, result);
        }
        this.onDidChangeCodeLensesEmitter.fire(null);
    }
}
exports.TestStatusCodeLensProvider = TestStatusCodeLensProvider;
//# sourceMappingURL=testStatusCodeLensProvider.js.map
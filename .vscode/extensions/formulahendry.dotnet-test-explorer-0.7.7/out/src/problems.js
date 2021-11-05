"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Problems = void 0;
const vscode = require("vscode");
const utility_1 = require("./utility");
let Problems = /** @class */ (() => {
    class Problems {
        constructor(testCommands) {
            if (utility_1.Utility.getConfiguration().get("addProblems")) {
                testCommands.onNewTestResults(this.addTestResults, this);
                this._diagnosticCollection = vscode.languages.createDiagnosticCollection("dotnet-test-explorer");
            }
        }
        static createProblemsFromResults(results) {
            const resultsWithStackTrace = results
                .filter((tr) => tr.stackTrace);
            if (!resultsWithStackTrace.length) {
                return [];
            }
            const problems = [];
            resultsWithStackTrace.forEach((testResult) => {
                let m = Problems.regex.exec(testResult.stackTrace);
                const resultsWithLinks = [];
                while (m !== null) {
                    if (m.index === Problems.regex.lastIndex) {
                        Problems.regex.lastIndex++;
                    }
                    resultsWithLinks.push({ uri: m[1], lineNumber: parseInt(m[2], 10), message: testResult.message });
                    m = Problems.regex.exec(testResult.stackTrace);
                }
                problems.push(resultsWithLinks[resultsWithLinks.length - 1]);
            });
            return problems.reduce((groups, item) => {
                const val = item.uri;
                groups[val] = groups[val] || [];
                groups[val].push(new vscode.Diagnostic(new vscode.Range(item.lineNumber - 1, 0, item.lineNumber - 1, 10000), item.message));
                return groups;
            }, {});
        }
        dispose() {
            if (this._diagnosticCollection) {
                this._diagnosticCollection.dispose();
            }
        }
        addTestResults(results) {
            this._diagnosticCollection.clear();
            const problems = Problems.createProblemsFromResults(results.testResults);
            const newDiagnostics = [];
            for (const problem in problems) {
                if (problems.hasOwnProperty(problem)) {
                    newDiagnostics.push([vscode.Uri.file(problem), problems[problem]]);
                }
            }
            this._diagnosticCollection.set(newDiagnostics);
        }
    }
    Problems.regex = /in (.*):line (.*)/gm;
    return Problems;
})();
exports.Problems = Problems;
//# sourceMappingURL=problems.js.map
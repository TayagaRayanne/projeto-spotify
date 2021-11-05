"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestStatusCodeLens = void 0;
const vscode_1 = require("vscode");
const utility_1 = require("./utility");
class TestStatusCodeLens extends vscode_1.CodeLens {
    static parseOutcome(outcome) {
        if (outcome === "Passed") {
            return utility_1.Utility.codeLensPassed;
        }
        else if (outcome === "Failed") {
            return utility_1.Utility.codeLensFailed;
        }
        else if (outcome === "NotExecuted") {
            return utility_1.Utility.codeLensSkipped;
        }
        else {
            return null;
        }
    }
    constructor(range, status) {
        super(range);
        this.command = {
            title: status,
            command: null,
        };
    }
}
exports.TestStatusCodeLens = TestStatusCodeLens;
//# sourceMappingURL=testStatusCodeLens.js.map
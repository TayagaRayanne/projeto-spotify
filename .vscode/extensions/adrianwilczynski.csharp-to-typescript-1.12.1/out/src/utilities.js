"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function allowedOrDefault(value, allowedValues) {
    if (typeof value === 'string' && allowedValues.includes(value)) {
        return value;
    }
    return allowedValues[0];
}
exports.allowedOrDefault = allowedOrDefault;
function fullRange(document) {
    return new vscode.Range(0, 0, document.lineCount - 1, document.lineAt(document.lineCount - 1).range.end.character);
}
exports.fullRange = fullRange;
function textFromActiveDocument() {
    if (!vscode.window.activeTextEditor) {
        return '';
    }
    const document = vscode.window.activeTextEditor.document;
    const selection = vscode.window.activeTextEditor.selection;
    return !selection.isEmpty ? document.getText(selection) : document.getText();
}
exports.textFromActiveDocument = textFromActiveDocument;
//# sourceMappingURL=utilities.js.map
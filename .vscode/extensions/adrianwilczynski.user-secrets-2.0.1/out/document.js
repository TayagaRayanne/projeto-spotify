"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function override(document, content) {
    return __awaiter(this, void 0, void 0, function* () {
        const edit = new vscode.WorkspaceEdit();
        edit.replace(document.uri, fullRange(document), content);
        yield vscode.workspace.applyEdit(edit);
        yield document.save();
    });
}
exports.override = override;
function fullRange(document) {
    return new vscode.Range(0, 0, document.lineCount - 1, document.lineAt(document.lineCount - 1).range.end.character);
}
//# sourceMappingURL=document.js.map
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
const fs = require("fs");
const constants_1 = require("./constants");
function goTo(target, getPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!vscode.window.activeTextEditor) {
            return;
        }
        const path = getPath(vscode.window.activeTextEditor.document.fileName);
        if (!path || !fs.existsSync(path)) {
            vscode.window.showWarningMessage(constants_1.messages.unableToFind(target));
            return;
        }
        const document = yield vscode.workspace.openTextDocument(path);
        yield vscode.window.showTextDocument(document);
    });
}
exports.goTo = goTo;
//# sourceMappingURL=goTo.js.map
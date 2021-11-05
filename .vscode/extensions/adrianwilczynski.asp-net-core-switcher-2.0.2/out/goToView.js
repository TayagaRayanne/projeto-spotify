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
const view_1 = require("./view");
function goToView() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!vscode.window.activeTextEditor) {
            return;
        }
        const actionName = view_1.getClosestActionName(vscode.window.activeTextEditor);
        if (!actionName) {
            vscode.window.showWarningMessage(constants_1.messages.unableToFindAction);
            return;
        }
        const path = vscode.window.activeTextEditor.document.fileName;
        let viewPath = view_1.getViewPath(path, actionName);
        if (!fs.existsSync(viewPath)) {
            viewPath = view_1.getViewPath(path, actionName, true);
        }
        if (!fs.existsSync(viewPath)) {
            vscode.window.showWarningMessage(constants_1.messages.unableToFind('view'));
            return;
        }
        const document = yield vscode.workspace.openTextDocument(viewPath);
        yield vscode.window.showTextDocument(document);
    });
}
exports.goToView = goToView;
//# sourceMappingURL=goToView.js.map
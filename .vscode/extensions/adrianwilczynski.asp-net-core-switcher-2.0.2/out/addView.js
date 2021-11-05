"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const os = require("os");
const constants_1 = require("./constants");
const view_1 = require("./view");
function addView() {
    if (!vscode.window.activeTextEditor) {
        return;
    }
    const actionName = view_1.getClosestActionName(vscode.window.activeTextEditor);
    if (!actionName) {
        vscode.window.showWarningMessage(constants_1.messages.unableToFindAction);
        return;
    }
    const viewPath = view_1.getViewPath(vscode.window.activeTextEditor.document.fileName, actionName);
    if (fs.existsSync(viewPath)) {
        vscode.window.showWarningMessage(constants_1.messages.viewAlreadyExists);
        return;
    }
    createView(viewPath);
}
exports.addView = addView;
function createView(viewPath) {
    createViewDir(viewPath);
    fs.writeFileSync(viewPath, getTemplate(path.basename(viewPath, constants_1.ext.cshtml)));
}
function createViewDir(viewPath) {
    const parsedPath = path.parse(viewPath);
    const dirPath = parsedPath.dir;
    const root = parsedPath.root;
    let partialDirPath = root;
    for (const dir of dirPath.split(path.sep).splice(1)) {
        partialDirPath = path.join(partialDirPath, dir);
        if (!fs.existsSync(partialDirPath)) {
            fs.mkdirSync(partialDirPath);
        }
    }
}
function getTemplate(title) {
    return '@{' + os.EOL +
        `    ViewData["Title"] = "${title}";` + os.EOL +
        '}';
}
//# sourceMappingURL=addView.js.map
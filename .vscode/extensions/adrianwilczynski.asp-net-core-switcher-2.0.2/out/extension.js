"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const goToView_1 = require("./goToView");
const goToController_1 = require("./goToController");
const addView_1 = require("./addView");
const goToPage_1 = require("./goToPage");
const view_1 = require("./view");
const goToBlazorComponent_1 = require("./goToBlazorComponent");
function activate(context) {
    setContext(vscode.window.activeTextEditor);
    context.subscriptions.push(vscode.commands.registerCommand('extension.goToView', goToView_1.goToView), vscode.commands.registerCommand('extension.addView', addView_1.addView), vscode.commands.registerCommand('extension.goToController', goToController_1.goToController), vscode.commands.registerCommand('extension.goToPage', goToPage_1.goToPage), vscode.commands.registerCommand('extension.goToPageModel', goToPage_1.goToPageModel), vscode.commands.registerCommand('extension.goToBlazorComponent', goToBlazorComponent_1.goToBlazorComponent), vscode.commands.registerCommand('extension.goToCodeBehind', goToBlazorComponent_1.goToCodeBehind), vscode.window.onDidChangeActiveTextEditor(setContext));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
function setContext(editor) {
    if (!editor) {
        return;
    }
    const contexts = [
        { name: 'isPage', function: goToPage_1.isPage },
        { name: 'isPageModel', function: goToPage_1.isPageModel },
        { name: 'isController', function: view_1.isController },
        { name: 'isView', function: goToController_1.isView }
    ];
    if (editor.document.isUntitled || editor.document.uri.scheme !== 'file') {
        for (const context of contexts) {
            vscode.commands.executeCommand('setContext', context.name, false);
        }
        return;
    }
    for (const context of contexts) {
        vscode.commands.executeCommand('setContext', context.name, context.function(editor.document.fileName));
    }
}
//# sourceMappingURL=extension.js.map
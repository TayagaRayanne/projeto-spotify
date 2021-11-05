"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const commands = require("./commands");
const exceptionHandler = require("./exceptionHandler");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('libman.init', exceptionHandler.handle(commands.init)), vscode.commands.registerCommand('libman.restore', exceptionHandler.handle(commands.restore)), vscode.commands.registerCommand('libman.install', exceptionHandler.handle(commands.install)), vscode.commands.registerCommand('libman.uninstall', exceptionHandler.handle(commands.uninstall)), vscode.commands.registerCommand('libman.clean', exceptionHandler.handle(commands.clean)));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
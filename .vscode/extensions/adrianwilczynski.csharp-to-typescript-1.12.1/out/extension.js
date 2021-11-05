"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require("child_process");
const path = require("path");
const readline = require("readline");
const vscode = require("vscode");
const input_1 = require("./input");
const utilities_1 = require("./utilities");
const util_1 = require("util");
let server;
let rl;
let serverRunning = false;
let executingCommand = false;
function activate(context) {
    let standardError = '';
    serverRunning = true;
    server = cp.spawn('dotnet', [context.asAbsolutePath(path.join('server', 'CSharpToTypeScript.Server', 'bin', 'Release', 'netcoreapp2.2', 'publish', 'CSharpToTypeScript.Server.dll'))]);
    server.on('error', err => {
        serverRunning = false;
        vscode.window.showErrorMessage(`"C# to TypeScript" server related error occurred: "${err.message}".`);
    });
    server.stderr.on('data', data => {
        standardError += data;
    });
    server.on('exit', code => {
        serverRunning = false;
        vscode.window.showWarningMessage(`"C# to TypeScript" server shutdown with code: "${code}". Standard error: "${standardError}".`);
    });
    rl = readline.createInterface(server.stdout, server.stdin);
    context.subscriptions.push(vscode.commands.registerCommand('csharpToTypeScript.csharpToTypeScriptReplace', replaceCommand), vscode.commands.registerCommand('csharpToTypeScript.csharpToTypeScriptToClipboard', toClipboardCommand), vscode.commands.registerCommand('csharpToTypeScript.csharpToTypeScriptPasteAs', pasteAsCommand), vscode.commands.registerCommand('csharpToTypeScript.csharpToTypeScriptToFile', toFileCommand));
}
exports.activate = activate;
function deactivate() {
    if (serverRunning) {
        server.stdin.write('EXIT\n');
    }
}
exports.deactivate = deactivate;
function replaceCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!vscode.window.activeTextEditor) {
                return;
            }
            const result = yield convert(utilities_1.textFromActiveDocument());
            const document = vscode.window.activeTextEditor.document;
            const selection = vscode.window.activeTextEditor.selection;
            yield vscode.window.activeTextEditor.edit(builder => builder.replace(!selection.isEmpty ? selection : utilities_1.fullRange(document), result.convertedCode));
        }
        catch (error) {
            vscode.window.showWarningMessage(error.message);
        }
    });
}
function toClipboardCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield convert(utilities_1.textFromActiveDocument());
            yield vscode.env.clipboard.writeText(result.convertedCode);
        }
        catch (error) {
            vscode.window.showWarningMessage(error.message);
        }
    });
}
function pasteAsCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!vscode.window.activeTextEditor) {
                return;
            }
            const result = yield convert(yield vscode.env.clipboard.readText());
            const selection = vscode.window.activeTextEditor.selection;
            yield vscode.window.activeTextEditor.edit(builder => builder.replace(selection, result.convertedCode));
        }
        catch (error) {
            vscode.window.showWarningMessage(error.message);
        }
    });
}
function toFileCommand(uri) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            uri = (uri !== null && uri !== void 0 ? uri : (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.uri);
            if (!uri) {
                return;
            }
            const document = yield vscode.workspace.openTextDocument(uri);
            const code = document.getText();
            const filePath = uri.path;
            const result = yield convert(code, filePath);
            yield vscode.workspace.fs.writeFile(vscode.Uri.file(path.join(path.dirname(filePath), result.convertedFileName)), new util_1.TextEncoder().encode(result.convertedCode));
        }
        catch (error) {
            vscode.window.showWarningMessage(error.message);
        }
    });
}
function convert(code, fileName) {
    return new Promise((resolve, reject) => {
        var _a, _b, _c, _d;
        if (!serverRunning) {
            reject(new Error(`"C# to TypeScript" server isn't running! Reload Window to restart it.`));
            return;
        }
        if (executingCommand) {
            reject(new Error('Conversion in progress...'));
            return;
        }
        executingCommand = true;
        const configuration = vscode.workspace.getConfiguration()
            .get('csharpToTypeScript');
        const input = {
            code: code,
            fileName: fileName,
            useTabs: !(_b = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.options.insertSpaces, (_b !== null && _b !== void 0 ? _b : true)),
            tabSize: (_d = (_c = vscode.window.activeTextEditor) === null || _c === void 0 ? void 0 : _c.options.tabSize, (_d !== null && _d !== void 0 ? _d : 4)),
            export: !!configuration.export,
            convertDatesTo: utilities_1.allowedOrDefault(configuration.convertDatesTo, input_1.dateOutputTypes),
            convertNullablesTo: utilities_1.allowedOrDefault(configuration.convertNullablesTo, input_1.nullableOutputTypes),
            toCamelCase: !!configuration.toCamelCase,
            removeInterfacePrefix: !!configuration.removeInterfacePrefix,
            generateImports: !!configuration.generateImports,
            useKebabCase: !!configuration.useKebabCase,
            appendModelSuffix: !!configuration.appendModelSuffix,
            quotationMark: utilities_1.allowedOrDefault(configuration.quotationMark, input_1.quotationMarks)
        };
        const inputLine = JSON.stringify(input) + '\n';
        rl.question(inputLine, outputLine => {
            const { convertedCode, convertedFileName, succeeded, errorMessage } = JSON.parse(outputLine);
            if (!succeeded) {
                reject(new Error(`"C# to TypeScript" extension encountered an error while converting your code: "${errorMessage}".`));
            }
            else {
                resolve({
                    convertedCode: (convertedCode !== null && convertedCode !== void 0 ? convertedCode : ''),
                    convertedFileName
                });
            }
            executingCommand = false;
        });
    });
}
//# sourceMappingURL=extension.js.map
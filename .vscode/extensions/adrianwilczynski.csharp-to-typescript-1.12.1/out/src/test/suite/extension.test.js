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
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
suite('Commands Tests', () => {
    test('Replace whole document', () => __awaiter(void 0, void 0, void 0, function* () {
        const document = yield vscode.workspace.openTextDocument({
            language: 'csharp',
            content: `using System;

                namespace MyProject.DTOs
                {
                    public class Item
                    {
                        public string Text { get; set; }
                    }
                }`
        });
        yield vscode.window.showTextDocument(document);
        yield vscode.commands.executeCommand('csharpToTypeScript.csharpToTypeScriptReplace');
        const convertedContent = document.getText();
        assert.ok(convertedContent.includes('interface Item {'));
        assert.ok(convertedContent.includes(': string;'));
    }));
    test('Replace selection', () => __awaiter(void 0, void 0, void 0, function* () {
        const document = yield vscode.workspace.openTextDocument({
            language: 'csharp',
            content: `using System;

                namespace MyProject.DTOs
                {
                    public class Keep
                    {
                        public string KeepText { get; set; }
                    }

                    public class Replace
                    {
                        public int ReplaceNumber { get; set; }
                    }
                }`
        });
        yield vscode.window.showTextDocument(document);
        vscode.window.activeTextEditor.selection = new vscode.Selection(9, 0, document.lineCount - 1, document.lineAt(document.lineCount - 1).range.end.character);
        yield vscode.commands.executeCommand('csharpToTypeScript.csharpToTypeScriptReplace');
        const convertedContent = document.getText();
        assert.ok(convertedContent.includes('class Keep'));
        assert.ok(convertedContent.includes('public string KeepText { get; set; }'));
        assert.ok(convertedContent.includes('interface Replace'));
        assert.ok(convertedContent.includes(': number;'));
    }));
    test('Write to clipboard', () => __awaiter(void 0, void 0, void 0, function* () {
        const document = yield vscode.workspace.openTextDocument({
            language: 'csharp',
            content: `using System;

                namespace MyProject.DTOs
                {
                    public class WriteMe
                    {
                        public string Text { get; set; }
                    }
                }`
        });
        yield vscode.window.showTextDocument(document);
        yield vscode.commands.executeCommand('csharpToTypeScript.csharpToTypeScriptToClipboard');
        const convertedContent = yield vscode.env.clipboard.readText();
        assert.ok(convertedContent.includes('interface WriteMe {'));
        assert.ok(convertedContent.includes(': string;'));
    }));
    test('Convert & paste from clipboard', () => __awaiter(void 0, void 0, void 0, function* () {
        const document = yield vscode.workspace.openTextDocument({
            language: 'typescript'
        });
        yield vscode.env.clipboard.writeText(`using System;

            namespace MyProject.DTOs
            {
                public class PasteMe
                {
                    public string Text { get; set; }
                }
            }`);
        yield vscode.window.showTextDocument(document);
        yield vscode.commands.executeCommand('csharpToTypeScript.csharpToTypeScriptPasteAs');
        const convertedContent = document.getText();
        assert.ok(convertedContent.includes('interface PasteMe {'));
        assert.ok(convertedContent.includes(': string;'));
    }));
    test('Convert to new file', () => __awaiter(void 0, void 0, void 0, function* () {
        const tempDirPath = path.join(__dirname, 'temp');
        const csharpFilePath = path.join(tempDirPath, 'Item.cs');
        const tsFilePath = path.join(tempDirPath, 'item.ts');
        fs.mkdirSync(tempDirPath);
        if (fs.existsSync(csharpFilePath)) {
            fs.unlinkSync(csharpFilePath);
        }
        if (fs.existsSync(tsFilePath)) {
            fs.unlinkSync(tsFilePath);
        }
        fs.writeFileSync(csharpFilePath, `using System;

            namespace MyProject.DTOs
            {
                public class Item
                {
                    public string Text { get; set; }
                }
            }`);
        yield vscode.commands.executeCommand('csharpToTypeScript.csharpToTypeScriptToFile', vscode.Uri.file(csharpFilePath));
        assert.ok(fs.existsSync(tsFilePath));
        const tsFileContent = fs.readFileSync(tsFilePath, { encoding: 'utf-8' });
        assert.ok(tsFileContent.includes('interface Item {'));
        assert.ok(tsFileContent.includes(': string;'));
    }));
});
//# sourceMappingURL=extension.test.js.map
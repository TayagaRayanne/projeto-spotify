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
const vscode_1 = require("vscode");
const path = require("path");
const csprojReader_1 = require("./csprojReader");
const projectJsonReader_1 = require("./projectJsonReader");
const findupglob = require('find-up-glob');
class NamespaceDetector {
    constructor(filePath) {
        this.filePath = filePath;
    }
    getNamespace() {
        return __awaiter(this, void 0, void 0, function* () {
            let fullNamespace = yield this.fromCsproj();
            if (fullNamespace !== undefined) {
                return fullNamespace;
            }
            fullNamespace = yield this.fromProjectJson();
            if (fullNamespace !== undefined) {
                return fullNamespace;
            }
            return this.fromFilepath();
        });
    }
    fromCsproj() {
        return __awaiter(this, void 0, void 0, function* () {
            const csprojs = yield findupglob('*.csproj', { cwd: path.dirname(this.filePath) });
            if (csprojs === null || csprojs.length < 1) {
                return undefined;
            }
            const csprojFile = csprojs[0];
            const fileContent = yield this.read(vscode_1.Uri.file(csprojFile));
            const rootNamespace = new csprojReader_1.default(fileContent).getRootNamespace();
            if (rootNamespace === undefined) {
                return undefined;
            }
            return this.calculateFullNamespace(rootNamespace, path.dirname(csprojFile));
        });
    }
    fromProjectJson() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonFiles = yield findupglob('project.json', { cwd: path.dirname(this.filePath) });
            if (jsonFiles === null || jsonFiles.length < 1) {
                return undefined;
            }
            const projectJsonFile = jsonFiles[0];
            const projectJsonDir = path.dirname(projectJsonFile);
            const fileContent = yield this.read(vscode_1.Uri.file(projectJsonFile));
            const rootNamespace = new projectJsonReader_1.default(fileContent).getRootNamespace();
            if (rootNamespace === undefined) {
                return undefined;
            }
            return this.calculateFullNamespace(rootNamespace, projectJsonDir);
        });
    }
    fromFilepath() {
        const rootPath = vscode_1.workspace.workspaceFolders && vscode_1.workspace.workspaceFolders.length ? vscode_1.workspace.workspaceFolders[0].uri.fsPath : '';
        const namespaceWithLeadingDot = this.calculateFullNamespace('', rootPath);
        return namespaceWithLeadingDot.slice(1);
    }
    read(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield vscode_1.workspace.openTextDocument(file);
            return document.getText();
        });
    }
    calculateFullNamespace(rootNamespace, rootDirectory) {
        const filePathSegments = path.dirname(this.filePath).split(path.sep);
        const rootDirSegments = rootDirectory.split(path.sep);
        let fullNamespace = rootNamespace;
        for (let index = rootDirSegments.length; index < filePathSegments.length; index++) {
            fullNamespace += "." + filePathSegments[index];
        }
        return fullNamespace;
    }
}
exports.default = NamespaceDetector;
//# sourceMappingURL=namespaceDetector.js.map
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
exports.getChildrenOfPath = exports.getPathOfFolderToLookupFiles = void 0;
const path = require("path");
const vscode = require("vscode");
const minimatch = require("minimatch");
const path_1 = require("path");
/**
 * @param fileName  {string} current filename the look up is done. Absolute path
 * @param text      {string} text in import string. e.g. './src/'
 */
function getPathOfFolderToLookupFiles(fileName, text, rootPath, mappings) {
    const normalizedText = path.normalize(text || "");
    const isPathAbsolute = normalizedText.startsWith(path.sep);
    let rootFolder = path.dirname(fileName);
    let pathEntered = normalizedText;
    // Search a mapping for the current text. First mapping is used where text starts with mapping
    const mapping = mappings &&
        mappings.reduce((prev, curr) => {
            return prev || (normalizedText.startsWith(curr.key) && curr);
        }, undefined);
    if (mapping) {
        rootFolder = mapping.value;
        pathEntered = normalizedText.substring(mapping.key.length, normalizedText.length);
    }
    if (isPathAbsolute) {
        rootFolder = rootPath || "";
    }
    return path.join(rootFolder, pathEntered);
}
exports.getPathOfFolderToLookupFiles = getPathOfFolderToLookupFiles;
function getChildrenOfPath(path, config) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filesTubles = yield vscode.workspace.fs.readDirectory(vscode.Uri.file(path));
            const files = filesTubles
                .map((fileTuble) => fileTuble[0])
                .filter((filename) => filterHiddenFiles(filename, config));
            const fileInfoList = [];
            for (const file of files) {
                const fileStat = yield vscode.workspace.fs.stat(vscode.Uri.file(path_1.join(path, file)));
                fileInfoList.push({
                    file,
                    isFile: fileStat.type === vscode.FileType.File,
                    documentExtension: getDocumentExtension(file, fileStat),
                });
            }
            return fileInfoList;
        }
        catch (error) {
            return [];
        }
    });
}
exports.getChildrenOfPath = getChildrenOfPath;
function getDocumentExtension(file, fileStat) {
    if (fileStat.type !== vscode.FileType.File) {
        return undefined;
    }
    const fragments = file.split(".");
    return fragments[fragments.length - 1];
}
function filterHiddenFiles(filename, config) {
    if (config.showHiddenFiles) {
        return true;
    }
    return isFileHidden(filename, config) ? false : true;
}
function isFileHidden(filename, config) {
    return filename.startsWith(".") || isFileHiddenByVsCode(filename, config);
}
// files.exclude has the following form. key is the glob
// {
//    "**//*.js": true
//    "**//*.js": true "*.git": true
// }
function isFileHiddenByVsCode(filename, config) {
    return (config.filesExclude &&
        Object.keys(config.filesExclude).some((key) => config.filesExclude[key] && minimatch(filename, key)));
}
//# sourceMappingURL=file-utills.js.map
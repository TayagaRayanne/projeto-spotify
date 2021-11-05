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
const regexUtils_1 = require("./regexUtils");
const pathUtils_1 = require("./pathUtils");
function readCurrentReferences(csprojPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const documentText = (yield vscode.workspace.openTextDocument(csprojPath))
            .getText();
        return matchReferences(documentText)
            .map(r => pathUtils_1.toAbsolutePath(r, csprojPath))
            .map(pathUtils_1.normalizePath);
    });
}
exports.readCurrentReferences = readCurrentReferences;
function matchReferences(documentText) {
    return regexUtils_1.matchMany(documentText, /<ProjectReference Include="([^"]+)" *\/>/g)
        .map(m => m[1]);
}
//# sourceMappingURL=csprojReader.js.map
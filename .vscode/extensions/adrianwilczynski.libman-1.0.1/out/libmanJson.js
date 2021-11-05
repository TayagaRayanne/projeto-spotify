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
const vscode = require("vscode");
function defaultProvider(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield read(uri)).defaultProvider;
    });
}
exports.defaultProvider = defaultProvider;
function libraries(uri) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        return ((_a = (yield read(uri)).libraries) === null || _a === void 0 ? void 0 : _a.filter(l => !!l.library).map(l => l.library)) || [];
    });
}
exports.libraries = libraries;
function read(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        const libmanJson = yield vscode.workspace.openTextDocument(uri);
        return JSON.parse(libmanJson.getText());
    });
}
//# sourceMappingURL=libmanJson.js.map
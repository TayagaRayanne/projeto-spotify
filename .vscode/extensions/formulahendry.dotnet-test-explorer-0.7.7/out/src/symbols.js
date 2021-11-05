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
exports.Symbols = void 0;
const vscode = require("vscode");
class Symbols {
    static getSymbols(uri, removeArgumentsFromMethods) {
        return __awaiter(this, void 0, void 0, function* () {
            return vscode.commands.executeCommand("vscode.executeDocumentSymbolProvider", uri)
                .then((symbols) => {
                if (!symbols) {
                    return [];
                }
                const flattenedSymbols = Symbols.flatten(symbols, removeArgumentsFromMethods);
                if (removeArgumentsFromMethods) {
                    flattenedSymbols.map((s) => s.documentSymbol).forEach((s) => s.name = s.name.replace(/\(.*\)/g, ""));
                }
                return flattenedSymbols;
            });
        });
    }
    static flatten(documentSymbols, removeArgumentsFromMethods, parent) {
        let flattened = [];
        documentSymbols.map((ds) => {
            let nameForCurrentLevel;
            let nameForSymbol = ds.name;
            if (ds.kind === vscode.SymbolKind.Method && removeArgumentsFromMethods) {
                nameForSymbol = nameForSymbol.replace(/\(.*\)/g, "");
            }
            if (ds.kind === vscode.SymbolKind.Class) {
                nameForCurrentLevel = nameForSymbol;
            }
            else {
                nameForCurrentLevel = parent ? `${parent}.${nameForSymbol}` : nameForSymbol;
            }
            flattened.push({ fullName: nameForCurrentLevel, parentName: parent, documentSymbol: ds });
            if (ds.children) {
                flattened = flattened.concat(Symbols.flatten(ds.children, removeArgumentsFromMethods, nameForCurrentLevel));
            }
        });
        return flattened;
    }
}
exports.Symbols = Symbols;
//# sourceMappingURL=symbols.js.map
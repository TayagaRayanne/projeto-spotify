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
exports.FindTestInContext = void 0;
const vscode = require("vscode");
const appInsightsClient_1 = require("./appInsightsClient");
const symbols_1 = require("./symbols");
class FindTestInContext {
    find(doc, position) {
        return __awaiter(this, void 0, void 0, function* () {
            appInsightsClient_1.AppInsightsClient.sendEvent("findTestInContext");
            return symbols_1.Symbols.getSymbols(doc.uri, true).then((documentSymbols) => {
                const symbolsInRange = documentSymbols.filter((ds) => ds.documentSymbol.range.contains(position));
                let symbolCandidate;
                symbolCandidate = symbolsInRange.find((s) => s.documentSymbol.kind === vscode.SymbolKind.Method);
                if (symbolCandidate) {
                    return { testName: (symbolCandidate.fullName), isSingleTest: true };
                }
                symbolCandidate = symbolsInRange.find((s) => s.documentSymbol.kind === vscode.SymbolKind.Class);
                if (symbolCandidate) {
                    return { testName: symbolCandidate.fullName, isSingleTest: false };
                }
            });
        });
    }
}
exports.FindTestInContext = FindTestInContext;
//# sourceMappingURL=findTestInContext.js.map
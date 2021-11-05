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
const path = require("path");
function showQuickPick(csprojs, currentReferences) {
    return __awaiter(this, void 0, void 0, function* () {
        const allReferences = getAllReferences(csprojs, currentReferences);
        const picks = allReferences.map(c => {
            return {
                label: path.basename(c, path.extname(c)),
                detail: c,
                picked: currentReferences.includes(c)
            };
        });
        const selection = yield vscode.window.showQuickPick(picks, { canPickMany: true });
        if (!selection) {
            return;
        }
        return {
            add: getReferencesForAdd(selection, currentReferences),
            remove: getReferencesForRemove(selection, currentReferences)
        };
    });
}
exports.showQuickPick = showQuickPick;
function getAllReferences(csprojs, currentReferences) {
    const referenceOutsideOfWorkspace = currentReferences.filter(r => !csprojs.includes(r));
    return [...csprojs, ...referenceOutsideOfWorkspace];
}
function getReferencesForAdd(selection, currentReferences) {
    return selection.filter(s => !currentReferences.includes(s.detail))
        .map(s => s.detail);
}
function getReferencesForRemove(selection, currentReferences) {
    return currentReferences.filter(c => !selection.some(s => s.detail === c));
}
//# sourceMappingURL=quickPick.js.map
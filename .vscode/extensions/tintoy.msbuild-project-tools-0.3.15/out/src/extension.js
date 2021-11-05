'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const vscode = require("vscode");
const package_reference_completion_1 = require("./providers/package-reference-completion");
/**
 * Called when the extension is activated.
 *
 * @param context The extension context.
 */
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const nugetEndPointURLs = yield getNuGetV3AutoCompleteEndPoints();
        context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'xml', pattern: '**/*.*proj' }, new package_reference_completion_1.PackageReferenceCompletionProvider(nugetEndPointURLs[0] // For now, just default to using the primary.
        )));
    });
}
exports.activate = activate;
/**
 * Called when the extension is deactivated.
 */
function deactivate() {
    // Nothing to clean up.
}
exports.deactivate = deactivate;
/**
 * Get the current end-points URLs for the NuGet v3 AutoComplete API.
 */
function getNuGetV3AutoCompleteEndPoints() {
    return __awaiter(this, void 0, void 0, function* () {
        const nugetIndexResponse = yield axios_1.default.get('https://api.nuget.org/v3/index.json');
        const index = nugetIndexResponse.data;
        const autoCompleteEndPoints = index.resources
            .filter(resource => resource['@type'] === 'SearchAutocompleteService')
            .map(resource => resource['@id']);
        return autoCompleteEndPoints;
    });
}
//# sourceMappingURL=extension.js.map
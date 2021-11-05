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
const semver = require("semver");
const vscode = require("vscode");
const xmldom = require("xmldom");
const axios_1 = require("axios");
/**
 * Completion provider for PackageReference elements.
 */
class PackageReferenceCompletionProvider {
    /**
     * Create a new {@link PackageReferenceCompletionProvider}.
     *
     * @param nugetAutoCompleteUrls The URL of the NuGet API end-point to use.
     * @param showNewestVersionsFirst Show newest package versions first?
     */
    constructor(nugetAutoCompleteUrl, showNewestVersionsFirst) {
        this.nugetAutoCompleteUrl = nugetAutoCompleteUrl;
        this.showNewestVersionsFirst = showNewestVersionsFirst;
        /**
         * The parser for project XML.
         */
        this.parser = new xmldom.DOMParser({
            locator: {},
            errorHandler: (level, msg) => {
                console.log('XMLDOM', level, msg);
                return true;
            }
        });
        // TODO: Implement caching.
        /**
         * The cache for package Ids (keyed by partial package Id).
         */
        this.packageIdCache = new Map();
        /**
         * The cache for package versions (keyed by package Id).
         */
        this.packageVersionCache = new Map();
    }
    /**
     * Provide completion items for the specified document position.
     *
     * @param document The target document.
     * @param position The position within the target document.
     * @param token A vscode.CancellationToken that can be used to cancel completion.
     *
     * @returns A promise that resolves to the completion items.
     */
    provideCompletionItems(document, position, token) {
        return this.provideCompletionItemsCore(document, position, token);
    }
    /**
     * Provide completion items for the specified document position.
     *
     * @param document The target document.
     * @param position The position within the target document.
     * @param token A vscode.CancellationToken that can be used to cancel completion.
     *
     * @returns {Promise<vscode.CompletionList>} A promise that resolves to the completion item list.
     */
    provideCompletionItemsCore(document, position, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const completionItems = [];
            // To keep things simple, we only parse one line at a time (if your PackageReference element spans more than one line, too bad).
            const line = document.lineAt(position);
            const xml = this.parser.parseFromString(line.text);
            const elements = Array.from(xml.getElementsByTagName('PackageReference'))
                .concat(Array.from(xml.getElementsByTagName('GlobalPackageReference')));
            const pageSize = 10;
            let packageId;
            let packageVersion;
            let wantPackageId = false;
            let wantPackageVersion = false;
            let isLocallyFiltered = false;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const includeAttribute = element.attributes.getNamedItem('Include') || element.attributes.getNamedItem('Update');
                if (includeAttribute) {
                    packageId = includeAttribute.value;
                    wantPackageId = this.isPositionInAttributeValue(position, includeAttribute);
                }
                const versionAttribute = element.attributes.getNamedItem('Version');
                if (versionAttribute) {
                    packageVersion = versionAttribute.value;
                    wantPackageVersion = this.isPositionInAttributeValue(position, versionAttribute);
                }
                if (wantPackageId || wantPackageVersion)
                    break;
            }
            if (wantPackageId) {
                // TODO: Use NuGetClient from 'nuget-client'.
                // TODO: Don't hard-code the use of the primary base URL; use Promise.race to call both end-points.
                const response = yield axios_1.default.get(`${this.nugetAutoCompleteUrl}?q=${encodeURIComponent(packageId)}&take=${pageSize}&prerelease=true`);
                const availablePackageIds = response.data.data;
                availablePackageIds.sort();
                for (const availablePackageId of availablePackageIds) {
                    if (packageId && !availablePackageId.startsWith(packageId)) {
                        isLocallyFiltered = true;
                        continue;
                    }
                    const completionItem = new vscode.CompletionItem(availablePackageId, vscode.CompletionItemKind.Module);
                    completionItems.push(completionItem);
                }
            }
            else if (packageId && wantPackageVersion) {
                // TODO: Use NuGetClient from 'nuget-client'.
                // TODO: Don't hard-code the use of the primary base URL; use Promise.race to call both end-points.
                const response = yield axios_1.default.get(`${this.nugetAutoCompleteUrl}?id=${encodeURIComponent(packageId)}&take=${pageSize}&prerelease=true`);
                const availablePackageVersions = response.data.data;
                availablePackageVersions.sort((version1, version2) => semver.compare(version1, version2));
                if (this.showNewestVersionsFirst)
                    availablePackageVersions.reverse();
                if (availablePackageVersions) {
                    let sortKey = 0;
                    for (const availablePackageVersion of availablePackageVersions) {
                        if (packageVersion && !availablePackageVersion.startsWith(packageVersion)) {
                            isLocallyFiltered = true;
                            continue;
                        }
                        const completionItem = new vscode.CompletionItem(availablePackageVersion, vscode.CompletionItemKind.Value);
                        if (this.showNewestVersionsFirst) {
                            let sortText = sortKey.toString();
                            completionItem.sortText = 'NuGet' + ('000' + sortText).substring(sortText.length);
                        }
                        completionItems.push(completionItem);
                        sortKey++;
                    }
                }
            }
            // If the list is locally-filtered or incomplete, VSCode will call us again as the user continues to type.
            const moreResultsAvailable = isLocallyFiltered || completionItems.length >= pageSize;
            return new vscode.CompletionList(completionItems, moreResultsAvailable);
        });
    }
    /**
     * Get the text range representing the value of the specified attribute.
     *
     * @param attribute The attribute.
     * @param line The {@link vscode.TextLine} containing the attribute.
     */
    getValueRange(attribute, line) {
        const valueStart = attribute.columnNumber + 1;
        const valueEnd = valueStart + attribute.value.length;
        return new vscode.Range(new vscode.Position(line.lineNumber, valueStart), new vscode.Position(line.lineNumber, valueEnd));
    }
    /**
     * Add package Id suggestion results to the cache.
     *
     * @param partialPackageId The partial package Id.
     * @param packageIds The matching package Ids.
     */
    addToPackageIdCache(partialPackageId, packageIds) {
        this.packageIdCache.set(partialPackageId, packageIds);
    }
    /**
     * Add available package version results to the cache.
     *
     * @param partialPackageId The package Id.
     * @param packageIds The matching package versions.
     */
    addToPackageVersionCache(packageId, versions) {
        this.packageVersionCache.set(packageId, versions);
    }
    /**
     * Determine whether the position lies within the value of the specified attribute.
     *
     * @param position The position.
     * @param attribute The attribute.
     */
    isPositionInAttributeValue(position, attribute) {
        position = position.translate({
            characterDelta: 1
        });
        const valueStart = attribute.columnNumber + 1;
        const valueEnd = valueStart + attribute.value.length;
        console.log(`${attribute.name}(${position.character}/${valueStart}-${valueEnd})`);
        return (position.character >= valueStart && position.character <= valueEnd);
    }
    /**
     * Get the text range representing the value of the specified attribute.
     *
     * @param line The line containing the attribute.
     * @param attribute The attribute.
     * @returns {vscode.Range} A {@link vscode.Range} containing the attribute's value.
     */
    getAttributeValueRange(line, attribute) {
        const valueStart = attribute.columnNumber - 1;
        const valueEnd = valueStart + attribute.value.length;
        console.log(`${attribute.name}(/${valueStart}-${valueEnd})`);
        return new vscode.Range(new vscode.Position(line.lineNumber, valueStart), new vscode.Position(line.lineNumber, valueStart));
    }
}
exports.PackageReferenceCompletionProvider = PackageReferenceCompletionProvider;
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
exports.getNuGetV3AutoCompleteEndPoints = getNuGetV3AutoCompleteEndPoints;
//# sourceMappingURL=package-reference-completion.js.map
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
const path = require("path");
const libraryProviders_1 = require("./libraryProviders");
const terminal = require("./terminal");
const searchBox = require("./searchBox");
const libmanJson = require("./libmanJson");
function init(uri) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const defaultProvider = yield vscode.window.showQuickPick(libraryProviders_1.providers, {
            placeHolder: '--default-provider'
        });
        const defaultProviderOption = defaultProvider ? ` --default-provider ${defaultProvider.label}` : '';
        terminal.sendText('libman init' + defaultProviderOption, (_a = uri) === null || _a === void 0 ? void 0 : _a.fsPath);
    });
}
exports.init = init;
function restore(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        terminal.sendText('libman restore', path.dirname(uri.fsPath));
    });
}
exports.restore = restore;
function install(uri) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const defaultProviderName = yield libmanJson.defaultProvider(uri);
        const defaultProvider = libraryProviders_1.providers.find(p => p.label === defaultProviderName);
        const pickedProvider = yield vscode.window.showQuickPick(libraryProviders_1.providers, {
            placeHolder: '--provider'
        });
        const useDefaultProvider = !!defaultProvider && (!pickedProvider || defaultProvider === pickedProvider);
        const searchResultProvider = useDefaultProvider
            ? (_a = defaultProvider) === null || _a === void 0 ? void 0 : _a.searchResultProvider : (_b = pickedProvider) === null || _b === void 0 ? void 0 : _b.searchResultProvider;
        const library = searchResultProvider && (yield searchBox.show('[libraryId]', searchResultProvider));
        const providerOption = !useDefaultProvider && pickedProvider ? `--provider ${pickedProvider.label} ` : '';
        const libraryArgument = library || '';
        terminal.sendText('libman install ' + providerOption + libraryArgument, path.dirname(uri.fsPath));
    });
}
exports.install = install;
function uninstall(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        const installedLibraries = yield libmanJson.libraries(uri);
        const pickedLibrary = yield vscode.window.showQuickPick(installedLibraries, {
            placeHolder: '[libraryId]'
        });
        const libraryArgument = pickedLibrary || '';
        terminal.sendText('libman uninstall ' + libraryArgument, path.dirname(uri.fsPath));
    });
}
exports.uninstall = uninstall;
function clean(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        terminal.sendText('libman clean', path.dirname(uri.fsPath));
    });
}
exports.clean = clean;
//# sourceMappingURL=commands.js.map
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
let extensionContext;
let extensionStatusBarItem;
/**
 * Register the extension's commands.
 *
 * @param context The current extension context.
 */
function registerCommands(context, statusBarItem) {
    extensionContext = context;
    extensionStatusBarItem = statusBarItem;
    extensionContext.subscriptions.push(vscode.commands.registerCommand('msbuildProjectTools.toggleNuGetPreRelease', toggleNuGetPreRelease));
}
exports.registerCommands = registerCommands;
/**
 * Toggle filtering of NuGet pre-release packages and package versions.
 */
function toggleNuGetPreRelease() {
    return __awaiter(this, void 0, void 0, function* () {
        const configuration = vscode.workspace.getConfiguration();
        // Toggle
        const includePreRelease = !configuration.get('msbuildProjectTools.nuget.includePreRelease');
        yield configuration.update('msbuildProjectTools.nuget.includePreRelease', includePreRelease);
        if (includePreRelease)
            extensionStatusBarItem.text = '$(check) NuGet: Pre-release enabled';
        else
            extensionStatusBarItem.text = '$(circle-slash) NuGet: Pre-release disabled';
        extensionStatusBarItem.show();
        setTimeout(() => {
            try {
                extensionStatusBarItem.hide();
            }
            catch (e) {
                // Proxy disposed; nothing to do
            }
        }, 800);
    });
}
//# sourceMappingURL=commands.js.map
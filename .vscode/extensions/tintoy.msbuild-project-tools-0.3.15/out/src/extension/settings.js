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
const objectpath = require("object-path");
const vscode = require("vscode");
// TODO: Use dotted setting names to populated nested structure copied from defaultSettings.
exports.defaultSettings = {
    logging: {
        seq: {},
        level: 'Information'
    },
    language: {
        disable: {}
    },
    nuget: {},
    experimentalFeatures: []
};
/**
 * Read and parse a VSCode-style settings object.
 *
 * @param vscodeSettings The settings object (keys are 'msbuildProjectTools.xxx').
 *
 * @returns The parsed settings.
 */
function readVSCodeSettings(vscodeSettings) {
    const settings = Object.assign({}, exports.defaultSettings);
    const settingsHelper = objectpath(settings);
    for (const key of Object.getOwnPropertyNames(vscodeSettings)) {
        const value = vscodeSettings[key];
        const path = key.replace('msbuildProjectTools.', '');
        settingsHelper.set(path, value);
    }
    return settings;
}
exports.readVSCodeSettings = readVSCodeSettings;
/**
 * Update the configuration schema to the current version, if required.
 *
 * @param configuration The current configuration.
 * @param workspaceConfiguration VS Code's global configuration.
 * @returns The updated configuration
 */
function upgradeConfigurationSchema(configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!configuration.schemaVersion)
            return;
        let modified = false;
        const workspaceConfiguration = vscode.workspace.getConfiguration();
        const legacyExperimentalFeatureConfiguration = configuration.experimentalFeatures;
        if (legacyExperimentalFeatureConfiguration) {
            yield workspaceConfiguration.update('msbuildProjectTools.experimentalFeatures', legacyExperimentalFeatureConfiguration || [], true // global
            );
            modified = true;
        }
        const legacyLanguageConfiguration = configuration.language;
        if (legacyLanguageConfiguration) {
            if (legacyLanguageConfiguration.useClassicProvider) {
                yield workspaceConfiguration.update('msbuildProjectTools.language.useClassicProvider', legacyLanguageConfiguration.useClassicProvider, true // global
                );
                modified = true;
            }
            if (legacyLanguageConfiguration.disableHover) {
                yield workspaceConfiguration.update('msbuildProjectTools.language.disableHover', legacyLanguageConfiguration.disableHover, true // global
                );
                modified = true;
            }
        }
        const legacyNugetConfiguration = configuration.nuget;
        if (legacyNugetConfiguration) {
            if (legacyNugetConfiguration.disablePreFetch) {
                yield workspaceConfiguration.update('msbuildProjectTools.nuget.disablePreFetch', legacyNugetConfiguration.disablePreFetch, true // global
                );
                modified = true;
            }
            if (legacyNugetConfiguration.includePreRelease) {
                yield workspaceConfiguration.update('msbuildProjectTools.nuget.includePreRelease', legacyNugetConfiguration.includePreRelease, true // global
                );
                modified = true;
            }
            if (legacyNugetConfiguration.newestVersionsFirst) {
                yield workspaceConfiguration.update('msbuildProjectTools.nuget.newestVersionsFirst', legacyNugetConfiguration.newestVersionsFirst, true // global
                );
                modified = true;
            }
        }
        const legacyLoggingConfiguration = configuration.logging;
        if (legacyLoggingConfiguration) {
            if (legacyLoggingConfiguration.logLevel) {
                yield workspaceConfiguration.update('msbuildProjectTools.nuget.newestVersionsFirst', legacyLoggingConfiguration.logLevel, true // global
                );
                modified = true;
            }
            if (legacyLoggingConfiguration.file) {
                yield workspaceConfiguration.update('msbuildProjectTools.nuget.newestVersionsFirst', legacyLoggingConfiguration.file, true // global
                );
                modified = true;
            }
            if (legacyLoggingConfiguration.trace) {
                yield workspaceConfiguration.update('msbuildProjectTools.nuget.newestVersionsFirst', legacyLoggingConfiguration.trace, true // global
                );
                modified = true;
            }
            const legacySeqLoggingConfiguration = legacyLoggingConfiguration.seq;
            if (legacySeqLoggingConfiguration) {
                if (legacySeqLoggingConfiguration.level) {
                    yield workspaceConfiguration.update('msbuildProjectTools.logging.seq.level', legacySeqLoggingConfiguration.level, true // global
                    );
                    modified = true;
                }
                if (legacySeqLoggingConfiguration.url) {
                    yield workspaceConfiguration.update('msbuildProjectTools.logging.seq.url', legacySeqLoggingConfiguration.url, true // global
                    );
                    modified = true;
                }
                if (legacySeqLoggingConfiguration.apiKey) {
                    yield workspaceConfiguration.update('msbuildProjectTools.logging.seq.apiKey', legacySeqLoggingConfiguration.apiKey, true // global
                    );
                    modified = true;
                }
            }
            configuration.logging = null;
            modified = true;
        }
        if (configuration.schemaVersion) {
            configuration.schemaVersion = null;
            modified = true;
        }
        if (modified) {
            // TODO: Show notification indicating that old settings key should be deleted.
            yield vscode.window.showInformationMessage('MSBuild project tools settings have been upgraded to the latest version; please manually remove the old key ("msbuildProjectTools") from settings.json.');
        }
    });
}
exports.upgradeConfigurationSchema = upgradeConfigurationSchema;
//# sourceMappingURL=settings.js.map
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
const mz_1 = require("mz");
const os_1 = require("os");
const executables = require("./executables");
/**
 * Get the current version of .NET Core.
 *
 * @returns A promise that resolves to the current host version, or null if the version could not be determined.
 */
function getHostVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const dotnetExecutable = yield executables.find('dotnet');
        if (dotnetExecutable === null)
            return '';
        const [stdOut, stdError] = yield mz_1.child_process.execFile(dotnetExecutable, ['--info']);
        const lines = stdOut.trim().split(os_1.EOL);
        if (lines.length <= 1)
            return stdError.trim();
        // Assumes new versions of "dotnet --info" will continue to return the same set of sections in the same order (even if their names may be localised).
        let infoSectionName = null;
        let runtimeEnvironmentSectionName = null;
        let hostSectionName = null;
        let sdkListSectionName = null;
        let runtimeListSectionName = null;
        let sectionName = "unknown";
        let sectionData = new Map();
        let currentSection = [];
        sectionData[sectionName] = currentSection;
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            const currentLine = lines[lineIndex];
            if (currentLine.trim().length === 0)
                continue;
            if (currentLine.startsWith(' ')) {
                // Section data
                currentSection.push(currentLine.trim());
            }
            else {
                // New section
                sectionName = currentLine.trim();
                currentSection = sectionData.get(sectionName);
                if (!currentSection) {
                    currentSection = [];
                    sectionData.set(sectionName, currentSection);
                }
                if (!infoSectionName)
                    infoSectionName = sectionName;
                else if (!runtimeEnvironmentSectionName)
                    runtimeEnvironmentSectionName = sectionName;
                else if (!hostSectionName)
                    hostSectionName = sectionName;
                else if (!sdkListSectionName)
                    sdkListSectionName = sectionName;
                else if (!runtimeListSectionName)
                    runtimeListSectionName = sectionName;
            }
        }
        if (!hostSectionName)
            throw new Error('Failed to find the Host section in output from "dotnet --info".');
        const hostSection = sectionData.get(hostSectionName);
        const hostVersionInfo = hostSection.find(keyValuePair => keyValuePair.startsWith('Version: '));
        if (!hostVersionInfo)
            throw new Error('Failed to find the Host version information in output from "dotnet --info".');
        const hostVersion = hostVersionInfo.split(':')[1].trim();
        return hostVersion;
    });
}
exports.getHostVersion = getHostVersion;
//# sourceMappingURL=dotnet.js.map
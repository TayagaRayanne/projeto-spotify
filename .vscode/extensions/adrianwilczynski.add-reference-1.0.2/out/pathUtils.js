"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
function toAbsolutePath(relativePath, relativeTo) {
    return path.isAbsolute(relativePath)
        ? relativePath
        : path.resolve(path.dirname(relativeTo), relativePath);
}
exports.toAbsolutePath = toAbsolutePath;
function normalizePath(unnormalizedPath) {
    return usePlatformSpecificSeparator(driveLetterToLowerCase(path.normalize(unnormalizedPath)));
}
exports.normalizePath = normalizePath;
function driveLetterToLowerCase(unnormalizedPath) {
    if (unnormalizedPath.length === 0) {
        return unnormalizedPath;
    }
    return unnormalizedPath.replace(/^[A-Z](?=:[\\\/])/, unnormalizedPath[0].toLowerCase());
}
function usePlatformSpecificSeparator(unnormalizedPath) {
    return unnormalizedPath.replace(/[\\\/]/g, path.sep);
}
//# sourceMappingURL=pathUtils.js.map
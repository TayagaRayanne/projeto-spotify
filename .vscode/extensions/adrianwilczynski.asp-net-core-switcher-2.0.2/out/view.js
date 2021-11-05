"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const constants_1 = require("./constants");
function getViewPath(controllerPath, actionName, inShared = false) {
    return path.join(getViewsDir(controllerPath), inShared ? constants_1.dirs.shared : getControllerName(controllerPath), actionName + constants_1.ext.cshtml);
}
exports.getViewPath = getViewPath;
function getViewsDir(controllerPath) {
    return path.join(path.dirname(controllerPath), '..', constants_1.dirs.views);
}
function getControllerName(controllerPath) {
    const baseName = path.basename(controllerPath, constants_1.ext.cs);
    return baseName.endsWith(constants_1.controllerSuffix)
        ? baseName.substring(0, baseName.length - constants_1.controllerSuffix.length)
        : baseName;
}
function getClosestActionName(editor) {
    const currentLineNumber = editor.selection.end.line;
    for (let index = currentLineNumber; index >= 0; index--) {
        const line = editor.document.lineAt(index).text;
        const actionName = getActionNameFromLine(line);
        if (actionName) {
            return actionName;
        }
    }
    for (let index = currentLineNumber; index < editor.document.lineCount; index++) {
        const line = editor.document.lineAt(index).text;
        const actionName = getActionNameFromLine(line);
        if (actionName) {
            return actionName;
        }
    }
}
exports.getClosestActionName = getClosestActionName;
function getActionNameFromLine(line) {
    const matches = line.match(/(?<!\w)(IActionResult|ActionResult|ViewResult)[ \t]*>?[ \t]+(\w+)\(.*$/);
    if (!matches) {
        return;
    }
    return matches[2];
}
exports.getActionNameFromLine = getActionNameFromLine;
function isController(controllerPath) {
    return controllerPath.endsWith(constants_1.ext.cs) && isLocatedInControllersDir(controllerPath);
}
exports.isController = isController;
function isLocatedInControllersDir(controllerPath) {
    return path.dirname(controllerPath).split(path.sep).pop() === constants_1.dirs.controllers;
}
//# sourceMappingURL=view.js.map
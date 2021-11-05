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
const path = require("path");
const constants_1 = require("./constants");
const goTo_1 = require("./goTo");
function goToController() {
    return __awaiter(this, void 0, void 0, function* () {
        yield goTo_1.goTo('controller', getControllerPath);
    });
}
exports.goToController = goToController;
function getControllerPath(viewPath) {
    const parentDir = getParentDir(viewPath);
    if (!parentDir) {
        return;
    }
    return path.join(getControllersDir(viewPath), parentDir + constants_1.controllerSuffix + constants_1.ext.cs);
}
exports.getControllerPath = getControllerPath;
function getParentDir(filePath) {
    return path.dirname(filePath).split(path.sep).pop();
}
function getControllersDir(viewPath) {
    return path.join(path.dirname(viewPath), '..', '..', constants_1.dirs.controllers);
}
function isView(viewPath) {
    return viewPath.endsWith(constants_1.ext.cshtml) && isLocatedInViewsDir(viewPath);
}
exports.isView = isView;
function isLocatedInViewsDir(viewPath) {
    const pathSegments = path.dirname(viewPath).split(path.sep);
    if (pathSegments.length < 2) {
        return false;
    }
    return pathSegments[pathSegments.length - 2] === constants_1.dirs.views;
}
//# sourceMappingURL=goToController.js.map
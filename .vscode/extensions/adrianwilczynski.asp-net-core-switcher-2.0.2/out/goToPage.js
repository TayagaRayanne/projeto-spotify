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
function goToPage() {
    return __awaiter(this, void 0, void 0, function* () {
        yield goTo_1.goTo('page', getPagePath);
    });
}
exports.goToPage = goToPage;
function goToPageModel() {
    return __awaiter(this, void 0, void 0, function* () {
        yield goTo_1.goTo('page model', getPageModelPath);
    });
}
exports.goToPageModel = goToPageModel;
function getPagePath(pageModelPath) {
    return path.join(path.dirname(pageModelPath), path.basename(pageModelPath, constants_1.ext.cshtmlCs) + constants_1.ext.cshtml);
}
exports.getPagePath = getPagePath;
function getPageModelPath(pagePath) {
    return path.join(path.dirname(pagePath), path.basename(pagePath, constants_1.ext.cshtml) + constants_1.ext.cshtmlCs);
}
exports.getPageModelPath = getPageModelPath;
function isPageModel(pageModelPath) {
    return pageModelPath.endsWith(constants_1.ext.cshtmlCs) && isLocatedInPagesDir(pageModelPath);
}
exports.isPageModel = isPageModel;
function isPage(pagePath) {
    return pagePath.endsWith(constants_1.ext.cshtml) && isLocatedInPagesDir(pagePath);
}
exports.isPage = isPage;
function isLocatedInPagesDir(pagePath) {
    return pagePath.split(path.sep).includes(constants_1.dirs.pages);
}
//# sourceMappingURL=goToPage.js.map
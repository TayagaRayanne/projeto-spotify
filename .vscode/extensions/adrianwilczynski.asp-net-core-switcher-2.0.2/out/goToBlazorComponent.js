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
function goToCodeBehind() {
    return __awaiter(this, void 0, void 0, function* () {
        yield goTo_1.goTo('code behind', getCodeBehindPath);
    });
}
exports.goToCodeBehind = goToCodeBehind;
function goToBlazorComponent() {
    return __awaiter(this, void 0, void 0, function* () {
        yield goTo_1.goTo('component', getBlazorComponentPath);
    });
}
exports.goToBlazorComponent = goToBlazorComponent;
function getBlazorComponentPath(codeBehindPath) {
    return path.join(path.dirname(codeBehindPath), path.basename(codeBehindPath, constants_1.ext.razorCs) + constants_1.ext.razor);
}
function getCodeBehindPath(componentPath) {
    return path.join(path.dirname(componentPath), path.basename(componentPath, constants_1.ext.razor) + constants_1.ext.razorCs);
}
//# sourceMappingURL=goToBlazorComponent.js.map
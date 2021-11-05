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
const axios_1 = require("axios");
const searchResults_1 = require("./searchResults");
function url(query) {
    return `http://registry.npmjs.org/-/v1/search?text=${query}`;
}
function search(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield axios_1.default.get(url(query)))
            .data.objects.map(o => o.package.name)
            .splice(0, searchResults_1.searchResultCount);
    });
}
exports.search = search;
//# sourceMappingURL=npm.js.map
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
const xml2js = require("xml2js");
class CsprojReader {
    /**
     * Initializes a new instance for a .csproj
     * file.
     *
     * @param fileContent - The .csproj file full content
     */
    constructor(fileContent) {
        this.xml = fileContent;
        this.xmlParser = new xml2js.Parser();
    }
    getRootNamespace() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.xmlParser.parseStringPromise(this.xml);
                if (result === undefined
                    || result.Project.PropertyGroup === undefined
                    || !result.Project.PropertyGroup.length) {
                    return undefined;
                }
                let foundNamespace = undefined;
                for (const propertyGroup of result.Project.PropertyGroup) {
                    if (propertyGroup.RootNamespace) {
                        foundNamespace = propertyGroup.RootNamespace[0];
                        break;
                    }
                }
                return foundNamespace;
            }
            catch (errParsingXml) {
                console.error('Error parsing project xml', errParsingXml);
            }
            return undefined;
        });
    }
}
exports.default = CsprojReader;
//# sourceMappingURL=csprojReader.js.map
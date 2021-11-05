"use strict";
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
        let foundNamespace = undefined;
        this.xmlParser.parseString(this.xml, (error, result) => {
            if (result === undefined
                || result.Project.PropertyGroup === undefined
                || !result.Project.PropertyGroup.length) {
                return undefined;
            }
            for (const propertyGroup of result.Project.PropertyGroup) {
                if (propertyGroup.RootNamespace) {
                    foundNamespace = propertyGroup.RootNamespace[0];
                    break;
                }
            }
            ;
        });
        return foundNamespace;
    }
}
exports.default = CsprojReader;
//# sourceMappingURL=csprojReader.js.map
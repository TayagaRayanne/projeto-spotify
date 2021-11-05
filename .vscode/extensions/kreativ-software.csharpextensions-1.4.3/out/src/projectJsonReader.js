"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectJsonReader {
    /**
     * Initializes a new instance for a project.json file.
     *
     * @param fileContent - The project.json file full content
     */
    constructor(fileContent) {
        this.json = fileContent;
    }
    getRootNamespace() {
        return new Promise((resolve /*, reject*/) => {
            try {
                const jsonObject = JSON.parse(this.json);
                if (jsonObject.tooling === undefined) {
                    return resolve(undefined);
                }
                return resolve(jsonObject.tooling.defaultNamespace);
            }
            catch (_a) {
                return resolve(undefined);
            }
        });
    }
}
exports.default = ProjectJsonReader;
//# sourceMappingURL=projectJsonReader.js.map
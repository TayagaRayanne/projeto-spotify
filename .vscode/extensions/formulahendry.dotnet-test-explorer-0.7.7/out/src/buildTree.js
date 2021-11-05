"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSingleItemTrees = exports.buildTree = void 0;
function buildTree(parsedNames) {
    const root = { fullName: "", name: "", subTrees: new Map(), tests: [] };
    for (const parsedName of parsedNames) {
        let currentNode = root;
        for (let i = 0; i < parsedName.segments.length - 1; i++) {
            const segment = parsedName.segments[i];
            const part = parsedName.fullName.substr(segment.start, segment.end - segment.start);
            const fullName = parsedName.fullName.substr(0, segment.end);
            if (!currentNode.subTrees.has(part)) {
                const newTree = {
                    fullName,
                    name: part,
                    subTrees: new Map(),
                    tests: [],
                };
                currentNode.subTrees.set(part, newTree);
                currentNode = newTree;
            }
            else {
                currentNode = currentNode.subTrees.get(part);
            }
        }
        const lastSegment = parsedName.segments[parsedName.segments.length - 1];
        const testName = parsedName.fullName.substr(lastSegment.start, lastSegment.end - lastSegment.start);
        currentNode.tests.push(testName);
    }
    return root;
}
exports.buildTree = buildTree;
/**
 * Merges nodes in the tree that contain only a single element.
 *
 * E.g. this:
 *
 *    a
 *    |- b
 *       |- c
 *       |- d
 *
 * is made into this:
 *
 *    a.b
 *    |- c
 *    |- d
 *
 *
 * @param tree The input tree.
 * @returns A new tree with merged nodes.
 */
function mergeSingleItemTrees(tree) {
    if (tree.tests.length === 0
        && tree.subTrees.size === 1) {
        let [[, childTree]] = tree.subTrees;
        childTree = mergeSingleItemTrees(childTree);
        return Object.assign(Object.assign({}, childTree), { name: tree.name === "" ? childTree.name : `${tree.name}.${childTree.name}` });
    }
    else {
        const subTrees = new Map(Array.from(tree.subTrees.values(), (childNamespace) => {
            const merged = mergeSingleItemTrees(childNamespace);
            return [merged.name, merged];
        }));
        return Object.assign(Object.assign({}, tree), { subTrees });
    }
}
exports.mergeSingleItemTrees = mergeSingleItemTrees;
//# sourceMappingURL=buildTree.js.map
import { visit } from "unist-util-visit";
const keybindingsMap = require("./keybindings-loader");

/**
 * Remark plugin to replace kb() syntax with actual keybindings.
 */
module.exports = () => {

    console.log("🚀 remark-keybinding-replace.js is loaded!");

    return (tree) => {
        visit(tree, ["text", "inlineCode", "html"], (node) => {
            node.value = node.value.replace(/kb\(([^)]+)\)/g, (_, command) => {
                if (!keybindingsMap[command]) {
                    return `unassigned`;
                }

                let keybinding = keybindingsMap[command];

                keybinding = keybinding
                    .split("+")
                    .map((key) => key.charAt(0).toUpperCase() + key.slice(1))
                    .join("+");

                return `${keybinding}`;
            });
        });
    };
};
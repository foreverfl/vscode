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
                    return `\`[Unknown Keybinding: ${command}]\``;
                }

                let keybinding = keybindingsMap[command];

                // 🔥 백틱(`)이 포함되어 있으면 이스케이프 처리
                if (keybinding.includes("`")) {
                    keybinding = keybinding.replace(/`/g, "\\`");
                }

                return `\`${keybinding}\``;
            });    
        });
    };
};
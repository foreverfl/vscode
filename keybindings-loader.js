const fs = require("fs");
const path = require("path");


const platform = process.platform;
let keybindingsFile = "doc.keybindings.win.json"; 

if (platform === "darwin") {
  keybindingsFile = "doc.keybindings.osx.json";
} else if (platform === "linux") {
  keybindingsFile = "doc.keybindings.linux.json";
}

const keybindingsPath = path.join(__dirname, "keybindings", keybindingsFile);
let keybindingsMap = {};

if (fs.existsSync(keybindingsPath)) {
  const keybindings = JSON.parse(fs.readFileSync(keybindingsPath, "utf8"));
  keybindings.forEach((binding) => {
    keybindingsMap[binding.command] = binding.key; // `{ "command": "key" }` 
  });
}

module.exports = keybindingsMap;

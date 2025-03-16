import linuxKeybindings from "../../keybindings/doc.keybindings.linux.json";
import macKeybindings from "../../keybindings/doc.keybindings.osx.json";
import winKeybindings from "../../keybindings/doc.keybindings.win.json";

export const getOS = () => {
  if (typeof window !== "undefined") {
    if (navigator.userAgent.includes("Win")) return "win";
    if (navigator.userAgent.includes("Mac")) return "mac";
    if (navigator.userAgent.includes("Linux")) return "linux";
  }
  return "win";
};

export const getKeybindings = () => {
  const os = getOS();
  let rawKeybindings: { key: string; command: string }[];

  switch (os) {
    case "win":
      rawKeybindings = winKeybindings;
      break;
    case "mac":
      rawKeybindings = macKeybindings;
      break;
    case "linux":
      rawKeybindings = linuxKeybindings;
      break;
    default:
      rawKeybindings = [];
  }

  // 배열 -> 객체 변환
  const keybindingMap: { [key: string]: string } = {};
  rawKeybindings.forEach(({ key, command }) => {
    keybindingMap[command] = key;
  });

  return keybindingMap;
};
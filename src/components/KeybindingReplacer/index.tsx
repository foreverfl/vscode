import { useLocation } from "@docusaurus/router";
import { capitalizeKeys } from "@site/src/utils/format-keybindings";
import { getKeybindings } from "@site/src/utils/keybindings-loader";
import { useEffect } from "react";
import styles from "./index.module.css";

const replaceKeybindings = () => {
  const keybindings = getKeybindings();

  const normalizedKeybindings = Object.keys(keybindings).reduce((acc, key) => {
    acc[key.toLowerCase()] = capitalizeKeys(keybindings[key]);
    return acc;
  }, {} as { [key: string]: string });

  document.querySelectorAll("code").forEach((codeElement) => {
    const match = codeElement.textContent?.match(/kb\((.*?)\)/);
    if (match) {
      const command = match[1].toLowerCase(); 
      const keybinding = normalizedKeybindings[command] || "unassigned";

      const span = document.createElement("code");
      span.className = styles.keybinding;
      span.textContent = keybinding;

      codeElement.replaceWith(span);
    }
  });
};

const KeybindingReplacer = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      replaceKeybindings();
    }, 100); 
  }, [location.pathname]);

  return null;
};

export default KeybindingReplacer;

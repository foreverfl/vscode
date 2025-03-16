import { useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import styles from "./index.module.css"; 

const replaceKeyStyles = () => {
  document.querySelectorAll("code").forEach((codeElement) => {
    const match = codeElement.textContent?.match(/kbstyle\((.*?)\)/);
    if (match) {
      const keyText = match[1];

      const span = document.createElement("code");
      span.className = styles["key-style"];
      span.textContent = keyText;

      codeElement.replaceWith(span);
    }
  });
};

const KeyStyleReplacer = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      replaceKeyStyles();
    }, 100); 
  }, [location.pathname]);

  return null;
};

export default KeyStyleReplacer;

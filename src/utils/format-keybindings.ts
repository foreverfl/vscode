export const capitalizeKeys = (keybinding: string) => {
  return keybinding
    .split(/([+ ])/g) 
    .map((part) => part === "+" || part === " " ? part : (part.length === 1 ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1))) 
    .join("");
};

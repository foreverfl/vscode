import { createContext, useContext, useEffect, useState } from "react";
import { getKeybindings } from "../utils/keybindings-loader";

const KeybindingContext = createContext<{ [key: string]: string }>({});

export const KeybindingProvider = ({ children }: { children: React.ReactNode }) => {
  const [keybindings, setKeybindings] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const bindings = getKeybindings();
    setKeybindings(bindings);
    console.log("[KeybindingProvider] Keybindings loaded:", bindings);
  }, []);

  return (
    <KeybindingContext.Provider value={keybindings}>
      {children}
    </KeybindingContext.Provider>
  );
};

export const useKeybindings = () => useContext(KeybindingContext);

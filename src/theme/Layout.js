import Layout from "@theme-original/Layout";
import KeybindingReplacer from "../components/KeybindingReplacer";
import { KeybindingProvider } from "@site/src/contexts/keybindingContext";
import KeyStyleReplacer from "@site/src/components/KeyStyleReplacer";

export default function RootLayout(props) {
  return (
    <KeybindingProvider>
      <Layout {...props} />
      <KeybindingReplacer />
      <KeyStyleReplacer />
    </KeybindingProvider>
  );
}
import { useWidgetStore, useKeyPressStore } from "shared/store";
import { useEffect } from "react";

export default function useKeyPress() {
  const { setIsPressed } = useKeyPressStore();
  const { setNowView } = useWidgetStore();
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const keyMapping: Record<string, (() => void) | (() => Promise<void>)> = {
        Enter: async () => {
          setIsPressed();
          setTimeout(() => {
            setNowView("portfolio");
          }, 1000);
        },
      };
      const { key } = e;
      if (keyMapping[key]) {
        e.stopPropagation();
        keyMapping[key]();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });
}

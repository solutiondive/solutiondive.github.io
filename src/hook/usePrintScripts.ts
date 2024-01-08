import { useEffect, useState } from "react";

export default function usePrintScripts(scripts: string[]) {
  const [displayedScripts, setDisplayedScripts] = useState<string[]>([]);
  const [scriptIndex, setScriptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (scriptIndex < scripts.length) {
      if (charIndex < scripts[scriptIndex].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedScripts((prev) => {
            const updatedScripts = [...prev];
            if (updatedScripts[scriptIndex] === undefined) {
              updatedScripts[scriptIndex] = "";
            }
            updatedScripts[scriptIndex] += scripts[scriptIndex][charIndex];
            return updatedScripts;
          });
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timeoutId);
      }
      setScriptIndex(scriptIndex + 1);
      setCharIndex(0);
    }
    return () => {};
  }, [scriptIndex, charIndex, scripts]);
  return { displayedScripts };
}

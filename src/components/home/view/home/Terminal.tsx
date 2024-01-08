import useKeyPress from "hook/useKeyPress";
import { scripts } from "document/terminal";
import usePrintScripts from "hook/usePrintScripts";
import { useKeyPressStore } from "shared/store";

export default function Terminal() {
  const { displayedScripts } = usePrintScripts(scripts);
  const { isPressed } = useKeyPressStore();
  useKeyPress();

  const terminalLayout = () => {
    if (isPressed) return "h-0 w-9/10 max-w-5xl duration-500 absolute ";
    return "w-9/10 h-132 max-w-5xl border border-charcoal-gray ";
  };

  return (
    <div className={`${terminalLayout()} bg-deep-charcoal font-cascadiamono-light text-white `}>
      <div className="flex h-1/10 flex-row items-end bg-charcoal-gray  ">
        <div
          className={
            isPressed
              ? "hidden"
              : "block " + "h-4/5 w-64 rounded-t-lg bg-deep-charcoal text-start text-sm p-2"
          }
        >
          관리자: Windows PowerShell
        </div>
      </div>
      <div className={isPressed ? "hidden " : "block " + "p-2"}>
        {displayedScripts.map((script, index) => (
          <div key={index} className="h-5">
            {script}
          </div>
        ))}
      </div>
    </div>
  );
}

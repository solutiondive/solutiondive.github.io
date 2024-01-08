import { useWidgetStore } from "shared/store";
import Terminal from "../view/home/Terminal";
import Portfolio from "../view/home/Portfolio";

export default function Views({ props }: { props: string }) {
  const { nowView } = useWidgetStore();
  if (nowView === "terminal") return <Terminal />;
  if (nowView === "portfolio") return <Portfolio props={props} />;
  return <></>;
}

import { center } from "style/display";
import Views from "../controller/Views";

export default function Home({ props }: { props: string }) {
  return (
    <div className={`min-h-screen bg-black ${center.colO}`}>
      <Views props={props} />
    </div>
  );
}

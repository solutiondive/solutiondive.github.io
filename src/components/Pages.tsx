import { Routes, Route } from "react-router-dom";
import homePage from "./home/Page";
import aboutPage from "./about/Page";

export default function Pages() {
  const routers = [...homePage, ...aboutPage];

  return (
    <Routes>
      {routers.map((route) => (
        <Route key={route[0]} path={route[0]} element={route[1]} />
      ))}
    </Routes>
  );
}

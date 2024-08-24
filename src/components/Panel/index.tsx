import { lazy } from "react";
const PanelMobile = lazy(() => import("./Mobile"));
const PanelDesktop = lazy(() => import("./Desktop"));

export default function Panel() {
  return (
    <>
      <PanelDesktop />
      <PanelMobile />
    </>
  );
}

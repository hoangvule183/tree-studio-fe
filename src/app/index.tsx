import { lazy, Suspense } from "react";
const Panel = lazy(() => import("../components/Panel"));
const Router = lazy(() => import("../components/PageRouter"));
function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen">
        <Router />
        <Panel/>
      </div>
    </Suspense>
  );
}

export default App;

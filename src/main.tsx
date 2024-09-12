// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.scss";
import StateMachineProvider from "./components/StateMachine/index.tsx";
import LoadingResource from "./components/LoadingResource/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    {/* <div className="max-md:hidden"> */}
    <div className="">
      <StateMachineProvider>
        <App />
        <LoadingResource />
      </StateMachineProvider>
    </div>
    {/* <div className="md:hidden h-screen w-screen flex justify-center items-center">
      <h1 className="text-2xl">Mobile site is not ready yet</h1>
    </div> */}
  </>
  // </React.StrictMode>
);

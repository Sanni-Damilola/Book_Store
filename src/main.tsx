import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SyncLoader } from "react-spinners";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[100vh]">
          <SyncLoader color="#f34344" />
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);

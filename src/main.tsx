import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LoaderInitial from "./components/LoaderInitial/LoaderInital.tsx";

const App = lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoaderInitial />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

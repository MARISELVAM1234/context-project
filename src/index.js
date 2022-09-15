import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { stateContext } from "./main/context/contextState";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <stateContext.Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </stateContext.Provider>
);

reportWebVitals();

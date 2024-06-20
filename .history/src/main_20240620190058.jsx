import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

import { EstilosGlobais } from "./components/EstilosGlobais";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <EstilosGlobais />
    <App />
  </React.StrictMode>
);

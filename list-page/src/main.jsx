import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"; //  Crucial change: import as default
import "./resets.scss";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found.");
}

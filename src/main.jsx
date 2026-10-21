import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

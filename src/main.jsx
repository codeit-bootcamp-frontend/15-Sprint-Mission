import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"; // Tailwind CSS 임포트
import App from "./App.jsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

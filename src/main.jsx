import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Footer, MainContent } from "./index"; // index.jsx에서 컴포넌트 import
import "./index.css"; // CSS 스타일 (선택 사항)

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>
);

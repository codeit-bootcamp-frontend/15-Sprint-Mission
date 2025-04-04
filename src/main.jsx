import React from "react";
import ReactDOM from "react-dom/client";
import Apps from "./index"; // import { app } from "./index"; // app 컴포넌트 가져오기
import "./index.css"; // CSS 스타일 (선택 사항)

const root = ReactDOM.createRoot(document.getElementById(`app`));
root.render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>
);

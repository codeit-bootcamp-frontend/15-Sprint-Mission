import React from "react";
import ReactDOM from "react-dom/client"; // 'react-dom/client'에서 임포트
import Main from "./main"; // 'Main.jsx' 파일을 import

const root = ReactDOM.createRoot(document.getElementById("root")); // 'createRoot' 사용
root.render(<Main />); // JSX 문법 사용하여 Main 컴포넌트 렌더링

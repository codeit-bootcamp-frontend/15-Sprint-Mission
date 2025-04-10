import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponents";
import BestItems from "./components/BestItems";
import AllItems from "./components/AllItems";
import "./App.css";

const Apps = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <BestItems />
      <AllItems />
      <Routes>
        <Route path="/items" element={<div>중고마켓 페이지</div>} />
        {/* BestItems 제거 */}
        <Route path="/all-items" element={<AllItems />} />
        <Route
          path="/additem"
          element={<div>상품 등록 페이지 (빈 페이지)</div>}
        />
        <Route path="/best-items" element={<BestItems />} />
        {/* BestItems 별도 경로로 이동 */}
        <Route path="/" element={<div>홈 페이지</div>} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app")); // "app" 맞는지 확인
root.render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>
);

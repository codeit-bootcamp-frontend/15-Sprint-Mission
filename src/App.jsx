import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Items from "./pages/Items";
import "./App.css";
import Header from "./components/Header";
import AddItem from "./pages/AddItem";

/**
 *
 *  router를 통해 페이지 전환을 관리하고 있습니다.
 *  header에는 로고 + 네비게이션 + 사용자 이미지로 구성되어있습니다. (/items: 중고마켓, /board: 자유게시판, /additem: 상품 등록 페이지)
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />} />
        <Route path="/board" element={<h1>자유게시판</h1>} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

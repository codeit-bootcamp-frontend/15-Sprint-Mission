import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Items from "./pages/Items/Items.jsx";
import AddItem from "./pages/AddItem/AddItem.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import "./assets/styles/base.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/items/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;

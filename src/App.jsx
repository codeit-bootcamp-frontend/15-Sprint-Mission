import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Items from "./pages/Items/Items.jsx";
import AddItem from "./pages/AddItem.jsx";
import "./assets/styles/base.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;

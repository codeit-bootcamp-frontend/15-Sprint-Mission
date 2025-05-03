import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Items from "./pages/Items.jsx";
import "./assets/styles/base.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </>
  );
}

export default App;

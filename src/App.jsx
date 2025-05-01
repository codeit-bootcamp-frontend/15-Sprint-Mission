import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import ItemsPage from "./pages/ItemsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

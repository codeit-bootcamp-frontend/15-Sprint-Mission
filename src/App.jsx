import { BrowserRouter, Routes, Route } from "react-router";
import Nav from "./components/Nav"; // Nav 컴포넌트 임포트
import HomePage from "./pages/HomePage";
import FreeBoardPage from "./pages/FreeBoardPage";
import ItemsPage from "./pages/ItemsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freeboard" element={<FreeBoardPage />} />
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

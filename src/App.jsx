import { BrowserRouter, Routes, Route } from "react-router";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import FreeBoardPage from "./pages/FreeBoardPage";
import ItemsPage from "./pages/ItemsPage";
import AddItem from "./pages/AddItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freeboard" element={<FreeBoardPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

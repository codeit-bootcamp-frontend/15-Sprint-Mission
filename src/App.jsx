import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import Layout from "./layout/Layout";
import AddItemPage from "./pages/AddItemPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemsPage />} />
        <Route path="additem" element={<AddItemPage />} />
      </Route>
    </Routes>
  );
}

export default App;

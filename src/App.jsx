import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

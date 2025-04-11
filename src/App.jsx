import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";

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

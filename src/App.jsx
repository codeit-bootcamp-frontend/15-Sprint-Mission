import { Route, Routes } from "react-router";
import AddItem from "./components/Additem/AddItem";
import Nav from "./common/Nav/Nav";
import Items from "./components/Items/Items";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AddItem />} />
        <Route path="/items" element={<Items />} />
        <Route path="/products" element={<Products />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

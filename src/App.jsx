import { Route, Routes } from "react-router";
import AddItem from "./components/AddItem/AddItem";
import Nav from "./common/Nav/Nav";
import Items from "./components/Items/Items";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AddItem />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

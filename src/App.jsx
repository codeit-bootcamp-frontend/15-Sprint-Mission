import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Items from "./pages/Items";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import "./styles/reset.css";
import "./styles/utils/variable.css";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/GlobalStyle";
import ItemsLayout from "./components/ItemsLayout";
import Board from "./pages/Board";
import AddItem from "./pages/AddItem";
import ProductId from "./pages/ProductId";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ItemsLayout />}>
            <Route path="/items" element={<Items />} />
            <Route path="/items/:productId" element={<ProductId />} />
            <Route path="/board" element={<Board />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

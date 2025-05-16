import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/LogIn/Components/SignUp";
import SignIn from "./pages/LogIn/Components/SignIn";
import "./App.css";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Product from "./pages/Items/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;

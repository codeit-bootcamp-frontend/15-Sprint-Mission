import "./App.css";
import "./base.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Login/SignupPage";
import Market from "./pages/Market/Market";
import Product from "./pages/Product/Product";
import Community from "./pages/Community/Community";
import AddItem from "./pages/AddItem/AddItem";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/items" element={<Market />} />
      <Route path="/items/:id" element={<Product />} />
      <Route path="/boards" element={<Community />} />
      <Route path="/additem" element={<AddItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

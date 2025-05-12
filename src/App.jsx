import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Item from "./pages/Item";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Community from "./pages/Community";

import "./styles/common.css";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/item" element={<Item />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/community" element={<Community />} />
        <Route path="/item/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

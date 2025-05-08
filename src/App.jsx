import "./App.css";
import "./base.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Market from "./pages/Market/Market";
import Community from "./pages/Community/Community";
import AddItem from "./pages/AddItem/AddItem";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login type="login" />} />
      <Route path="/signup" element={<Login type="signup" />} />
      <Route path="/items" element={<Market />} />
      <Route path="/boards" element={<Community />} />
      <Route path="/additem" element={<AddItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

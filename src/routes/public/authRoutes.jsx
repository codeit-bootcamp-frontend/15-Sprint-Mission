import { Route } from "react-router-dom";
import Login from "../../pages/Login.jsx";
import Signup from "../../pages/Signup.jsx";

const authRoutes = [
  <Route path="/login" element={<Login />} key="login" />,
  <Route path="/signup" element={<Signup />} key="signup" />,
];

export default authRoutes;

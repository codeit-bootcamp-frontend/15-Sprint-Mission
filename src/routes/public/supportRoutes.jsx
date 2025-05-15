import { Route } from "react-router-dom";
import FAQ from "../../pages/FAQ.jsx";
import Privacy from "../../pages/Privacy.jsx";

const supportRoutes = [
  <Route path="/FAQ" element={<FAQ />} key="faq" />,
  <Route path="/privacy" element={<Privacy />} key="privacy" />,
];

export default supportRoutes;

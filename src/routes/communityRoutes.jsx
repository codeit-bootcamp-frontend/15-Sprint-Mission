import { Route } from "react-router-dom";
import Community from "../pages/Community.jsx";

const communityRoutes = [
  <Route path="/community" element={<Community />} key="community" />,
];

export default communityRoutes;

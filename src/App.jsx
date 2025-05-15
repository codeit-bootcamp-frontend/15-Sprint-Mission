import { BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";

import "./styles/common.css";

function App() {
  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;

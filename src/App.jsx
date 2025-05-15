import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";
import AddPage from "./pages/AddPage";
import GlobalStyles from "./styles/GlobalStyles";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/items" element={<ItemPage />} />
          <Route path="/additem" element={<AddPage />} /> 
          <Route path="/board" element={<BoardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

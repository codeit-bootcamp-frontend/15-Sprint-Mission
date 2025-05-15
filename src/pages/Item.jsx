import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Item/Header";
import BestItem from "../components/Item/BestItem";
import AllItem from "../components/Item/AllItems";

import "../styles/item.css";

function Item() {
  const location = useLocation();
  const isMainItemPage = location.pathname === "/item";

  return (
    <>
      <header className="item-header">
        <Header />
      </header>

      <main className="item-main">
        {isMainItemPage && (
          <>
            <BestItem />
            <AllItem />
          </>
        )}
        <Outlet />
      </main>
    </>
  );
}

export default Item;

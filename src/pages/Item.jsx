import AllItem from "../components/Item/AllItems";
import Banner from "../components/Item/Banner";
import BestItem from "../components/Item/BestItem";

import "../styles/item.css";

function Item() {
  return (
    <>
      <header>
        <Banner />
      </header>

      <main className="item-main">
        <BestItem />
        <AllItem />
      </main>
    </>
  );
}

export default Item;

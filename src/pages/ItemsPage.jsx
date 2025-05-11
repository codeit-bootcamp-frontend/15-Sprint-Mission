import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import Search from "../components/Search";
import Sort from "../components/Sort";
import useBestItems from "../hooks/useBestItems";
import BestItemList from "../components/BestItemList";
import useDisplay from "../hooks/useDisplay";
import useAllItems from "../hooks/useAllItems";
import AllItemList from "../components/AllItemList";

const ItemsPage = () => {
  const navigate = useNavigate();
  const display = useDisplay();
  const bestItemList = useBestItems();
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const allItemList = useAllItems({ page, display, orderBy });

  return (
    <div className="tablet:p-24 tablet:pb-72 tablet:gap-40 mx-auto flex max-w-1200 flex-col gap-24 p-16 pb-36">
      <section className="flex flex-col gap-16">
        <h2 className="text-secondary-900 text-xl font-bold">베스트 상품</h2>
        <BestItemList bestItemList={bestItemList} display={display} />
      </section>
      <section className="tablet:gap-24 flex flex-col gap-16">
        <div className="tablet:gap-12 tablet:flex-nowrap flex flex-wrap items-center justify-between gap-8">
          <h2 className="tablet:order-1 text-secondary-900 grow text-xl font-bold">
            전체 상품
          </h2>
          <Button
            className="tablet:order-3"
            onClick={() => navigate("./additem")}
          >
            상품 등록하기
          </Button>
          <Search
            className={
              "tablet:order-2 tablet:max-w-325 tablet:min-w-250 tablet:basis-1/3 basis-[calc(100%-56px)]"
            }
          />
          <Sort className={"tablet:order-4"} setOrderBy={setOrderBy} />
        </div>
        <AllItemList allItemList={allItemList} />
      </section>
    </div>
  );
};
export default ItemsPage;

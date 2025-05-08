import AllItems from "../AllItems/AllItems";
import BestItems from "../BestItem/BestItem";

export default function Items() {
  return (
    <>
      {/* <h2 className={styles.title}>베스트 상품</h2> */}

      <BestItems />
      <AllItems />
    </>
  );
}

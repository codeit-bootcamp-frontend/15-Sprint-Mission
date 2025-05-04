import BestProducts from "../../components/BestProducts/BestProducts";
import AllProducts from "../../components/AllProducts/AllProducts";
import styles from "./Items.module.css";

const Items = () => {
  return (
    <div className={styles.items}>
      <BestProducts />
      <AllProducts />
    </div>
  );
};

export default Items;

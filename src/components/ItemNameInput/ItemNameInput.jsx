import { useId } from "react";
import styles from "./ItemNameInput.module.css";

const ItemNameInput = ({ value, onChange }) => {
  const id = useId();

  return (
    <div className={styles.itemNameInput}>
      <label htmlFor={id} className={styles.label}>
        상품명
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="상품명을 입력해주세요"
        className={styles.input}
      />
    </div>
  );
};

export default ItemNameInput;

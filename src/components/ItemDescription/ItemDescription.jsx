import { useId } from "react";
import styles from "./ItemDescription.module.css";

const ItemDescription = ({ value, onChange }) => {
  const id = useId();

  return (
    <div className={styles.itemDescription}>
      <label htmlFor={id} className={styles.label}>
        상품 소개
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="상품 소개를 입력해주세요"
        className={styles.textarea}
      />
    </div>
  );
};

export default ItemDescription;

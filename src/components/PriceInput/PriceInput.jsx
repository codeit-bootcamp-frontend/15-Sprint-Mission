import { useId } from "react";
import styles from "./PriceInput.module.css";

const PriceInput = ({ value, onChange }) => {
  const id = useId();

  const formatNumber = (numStr) => {
    const onlyNums = numStr.replace(/[^\d]/g, "");
    return onlyNums ? Number(onlyNums).toLocaleString() : "";
  };

  const handleFocus = (e) => {
    const raw = e.target.value.replace(/[^0-9,]/g, "").replace(/,/g, "");
    onChange(formatWithComma(raw));
  };

  const handleBlur = (e) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    if (raw) {
      const formatted = Number(raw).toLocaleString();
      onChange(`${formatted}원`);
    }
  };

  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/[^\d]/g, "");
    const formatted = formatNumber(onlyNums);
    onChange(formatted);
  };

  return (
    <div className={styles.priceInput}>
      <label htmlFor={id} className={styles.label}>
        판매가격
      </label>
      <input
        id={id}
        name="price"
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="판매 가격을 입력해주세요"
        className={styles.input}
        autoComplete="off"
      />
    </div>
  );
};

export default PriceInput;

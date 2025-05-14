import { useState } from "react";
import closeIcon from "./../../assets/icon/close-icon.svg";
import styles from "./TagInput.module.css";

const TagInput = ({ tags, onChange }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const trimmed = input.trim();
      if (trimmed && !tags.includes(trimmed)) {
        onChange([...tags, trimmed]);
      }
      setInput("");
    }
  };

  const handleRemove = (tagToRemove) => {
    const nextTags = tags.filter((tag) => tag !== tagToRemove);
    onChange(nextTags);
  };
  return (
    <div className={styles.tagInput}>
      <label className={styles.label}>태그</label>
      <input
        type="text"
        value={input}
        placeholder="태그를 입력해주세요"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />

      <div className={styles.tagList}>
        {tags.map((tag) => (
          <div key={tag} className={styles.tag}>
            <span>#{tag}</span>
            <button
              type="button"
              onClick={() => handleRemove(tag)}
              className={styles.removeButton}
            >
              <img src={closeIcon} alt="닫기 아이콘" className={styles.close} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;

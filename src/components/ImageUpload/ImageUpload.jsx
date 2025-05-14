import { useState } from "react";
import plusIcon from "./../../assets/icon/plus-icon.svg";
import closeIcon from "./../../assets/icon/close-icon.svg";
import styles from "./ImageUpload.module.css";

const ImageUpload = ({ image, onImageChange }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (image) {
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setError("");
      onImageChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setError("");
    onImageChange(null);
  };

  return (
    <div className={styles.imageUpload}>
      <h2 className={styles.label}>상품 이미지</h2>
      <div className={styles.imageRow}>
        <label className={styles.uploadBox}>
          <img src={plusIcon} alt="추가 아이콘" className={styles.plus} />
          <p className={styles.text}>이미지 등록</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className={styles.uploadInput}
          />
        </label>

        {image && (
          <div className={styles.previewBox}>
            <img src={image} alt="미리보기" className={styles.previewImage} />
            <button onClick={handleRemove} className={styles.removeButton}>
              <img src={closeIcon} alt="닫기 아이콘" className={styles.close} />
            </button>
          </div>
        )}
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ImageUpload;

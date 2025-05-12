import { useRef, useState } from "react";
import styles from "./styles/ProductImg.module.css";

export default function ProductImg({ preview, setPreview }) {
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (preview) {
      alert("이미지는 한 개만 업로드할 수 있습니다.");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setPreview(null);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.uploadBox}>
        <div className={styles.textContainer}>
          <span className={styles.plus}>＋</span>
          <p className={styles.text}>이미지 등록</p>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </label>

      {preview && (
        <div className={styles.imagePreviewBox}>
          <button className={styles.deleteButton} onClick={handleDelete}>
            <img src="/ic_X.svg" alt="등록 이미지 삭제 아이콘" />
          </button>
          <img src={preview} alt="미리보기" className={styles.previewImg} />
        </div>
      )}
    </div>
  );
}

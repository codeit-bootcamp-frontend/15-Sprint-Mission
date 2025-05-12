import { useState } from "react";

import ProductImg from "./components/ProductImg";
import styles from "./styles/AddItem.module.css";

export default function AddItemContent() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const isFormValid =
    productName && description && price && tags.length > 0 && imagePreview;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = tagInput.trim();
      if (trimmed && !tags.includes(trimmed)) {
        setTags((prev) => [...prev, trimmed]);
        setTagInput("");
      }
    }
  };

  const handleDelete = (targetTag) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== targetTag));
  };

  return (
    <main className={styles.container}>
      <section className={styles.addContainer}>
        <h1 className={styles.addTitle}>상품 등록하기</h1>
        <button disabled={!isFormValid} className={styles.addBtn} type="submit">
          등록
        </button>
      </section>

      <section className={styles.contentContainer}>
        <h2 className={styles.title}>상품 이미지</h2>
        <ProductImg preview={imagePreview} setPreview={setImagePreview} />
      </section>

      <section className={styles.contentContainer}>
        <h2 className={styles.title}>상품명</h2>
        <input
          className={styles.input}
          placeholder="상품명을 입력해주세요"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        ></input>
      </section>

      <section className={styles.contentContainer}>
        <h2 className={styles.title}>상품 소개</h2>
        <textarea
          className={styles.inputDescription}
          placeholder="상품 소개를 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </section>

      <section className={styles.contentContainer}>
        <h2 className={styles.title}>판매가격</h2>
        <input
          className={styles.input}
          placeholder="판매 가격을 입력해주세요"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </section>

      <section className={styles.contentContainer}>
        <h2 className={styles.title}>태그</h2>
        <input
          className={styles.input}
          placeholder="태그를 입력해주세요"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>

        <div className={styles.tagList}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              #{tag}
              <button
                className={styles.deleteBtn}
                type="button"
                onClick={() => handleDelete(tag)}
              >
                <img
                  className={styles.deleteImg}
                  src="/ic_X.svg"
                  alt="등록 이미지 삭제 아이콘"
                />
              </button>
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

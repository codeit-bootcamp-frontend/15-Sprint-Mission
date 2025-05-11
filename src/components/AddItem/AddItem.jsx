import styles from "./AddItem.module.scss";
import { useState, useRef } from "react";

export default function AddItem() {
  const [imagePreview, setimagePreview] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    about: "",
    price: "",
    tag: [],
  });
  const inputRef = useRef();
  const active = Object.values(formData).every((value) =>
    Array.isArray(value) ? value.length > 0 : value
  );

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "image") {
      const newImage = e.target.files[0];
      setimagePreview(URL.createObjectURL(newImage));
      setFormData((prev) => ({ ...prev, image: newImage }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }
  function handleTag(e) {
    if (e.key === "Enter") {
      e.preventDefault(); //폼 내부에서 엔터 -> 자동 제출되는거 막음
      setTimeout(() => {
        const newValue = inputRef.current.value.trim();
        if (newValue) {
          setFormData((prev) => ({
            ...prev,
            tag: [...prev.tag, newValue],
          }));
        }
        inputRef.current.value = "";
      }, 0);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  console.log(formData);
  function handleRemoveTag(tagToRemove) {
    setFormData((prev) => ({
      ...prev,
      tag: prev.tag.filter((tag) => tag !== tagToRemove),
    }));
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <header className={styles["form__header"]}>
          <h1 className={styles.h1}>상품 등록하기</h1>
          <button
            className={`${styles["submit--active"]} ${
              active ? "" : styles["submit--disabled"]
            }`}
            type="submit"
            disabled={!active}
          >
            등록
          </button>
        </header>
        <div className={styles["form__body"]}>
          <div className={styles["input__image"]}>
            <label
              htmlFor="input-image"
              className={`${styles["input__label"]}  ${styles["image--input"]}`}
            >
              상품 이미지
            </label>
            <input
              id="input-image"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              name="image"
              onChange={handleChange}
              placeholder="이미지 등록"
              style={{ display: "none" }}
            />
            {formData.image && (
              <div className={styles["image--preview"]}>
                <img src={imagePreview} alt="미리보기" />
                <button
                  className={`${styles.xButton} ${styles["delete-image"]}`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, image: "" }))
                  }
                />
              </div>
            )}
          </div>
          {formData.image && (
            <p className={styles.warning}>
              *이미지 등록은 최대 1개까지 가능합니다.
            </p>
          )}
          <label htmlFor="input-name" className={styles["input__label"]}>
            상품명
          </label>
          <input
            id="input-name"
            className={styles["input__short-text"]}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="상품명을 입력해주세요"
          />
          <label htmlFor="input-about" className={styles["input__label"]}>
            상품 소개
          </label>
          <textarea
            id="input-about"
            className={styles["input__long-text"]}
            type="text"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="상품 소개를 입력해주세요"
          />
          <label htmlFor="input-price" className={styles["input__label"]}>
            판매가격
          </label>
          <input
            id="input-price"
            className={styles["input__short-text"]}
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="판맥 가격을 입력해주세요"
          />
          <label htmlFor="input-tag" className={styles["input__label"]}>
            태그
          </label>
          <input
            id="input-tag"
            className={styles["input__short-text"]}
            type="text"
            name="tag"
            ref={inputRef}
            onKeyDown={handleTag}
            placeholder="태그를 입력해주세요"
          />
          <ul className={styles.tags}>
            {formData.tag.map((tag, index) => (
              <li key={index} className={styles.tag}>
                <span>#{tag}</span>
                <button
                  className={`${styles.xButton} ${styles["delete-tag"]}`}
                  onClick={() => handleRemoveTag(tag)}
                />
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
}

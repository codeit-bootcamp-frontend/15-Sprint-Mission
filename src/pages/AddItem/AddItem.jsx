import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./AddItem.css";
import upload from "../../assets/images/upload.svg";

const AddItem = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [uploadError, setUploadError] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);
  const priceRef = useRef(null);
  const nav = useNavigate();

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    e.target.value = "";
  }

  function preventUpload(e) {
    if (imageUrl) {
      e.preventDefault();
      setUploadError(true);
    }
  }

  function deleteUploadedImage() {
    setUploadError(false);
    setImageUrl(null);
  }

  function handleChange(e, input) {
    const value = e.target.value;
    const selectionStart = e.target.selectionStart;

    if (input === "name") {
      setName(value);
    } else if (input === "description") {
      setDescription(value);
    } else if (input === "price") {
      const numberValue = value.replace(/[^0-9]/g, "");

      if (numberValue) {
        const newPrice = Number(numberValue).toLocaleString();
        setPrice(newPrice);
        // 커서 위치 조정
        setTimeout(() => {
          if (priceRef.current) {
            priceRef.current.selectionStart =
              selectionStart + (newPrice.length - value.length);
            priceRef.current.selectionEnd =
              selectionStart + (newPrice.length - value.length);
            priceRef.current.focus();
          }
        }, 0);
      } else {
        setPrice("");
      }
    } else if (input === "tag") {
      setTag(value);
    }
  }

  function appendTag(e) {
    if (e.key === "Enter") {
      if (tag.trim() !== "") {
        setTagList((prev) => {
          const tagSet = new Set(prev);
          tagSet.add(tag);
          return [...tagSet];
        });
        setTag("");
      }
    }
  }

  function deleteTag(tag) {
    const newTagList = tagList.filter((item) => item !== tag);
    setTagList(newTagList);
  }

  function handleSubmit() {
    alert("등록 성공!");
    nav("/items");
  }
  return (
    <>
      <Header />
      <section className="add-item">
        <header className="register">
          상품 등록하기
          <button
            disabled={
              !name.trim() ||
              !description.trim() ||
              !price.trim() ||
              !tagList.length
            }
            onClick={handleSubmit}
          >
            등록
          </button>
        </header>
        <section className={`info-section ${uploadError ? "size-down" : ""}`}>
          <section className="image-section">
            상품 이미지
            <section className="upload-section">
              <label
                htmlFor="upload-input"
                className="upload-button"
                onClick={(e) => preventUpload(e)}
              >
                <div className="image-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="upload-input"
                  />
                  <img src={upload} alt="+" className="upload-img" />
                  <span>이미지 등록</span>
                </div>
              </label>
              {imageUrl && (
                <div className="image-uploaded">
                  <img src={imageUrl} alt="상품이미지" />
                  <button
                    className="delete-button"
                    onClick={deleteUploadedImage}
                  />
                </div>
              )}
            </section>
            <div className={`error-message ${uploadError ? "" : "hidden"}`}>
              *이미지 등록은 최대 1개까지 가능합니다.
            </div>
          </section>
          <label className="name-section">
            상품명
            <input
              className="name-input"
              placeholder="상품명을 입력하세요"
              onChange={(e) => handleChange(e, "name")}
              value={name}
            />
          </label>
          <label className="description-section">
            상품 소개
            <textarea
              className="description-input"
              placeholder="상품 소개를 입력해주세요"
              onChange={(e) => handleChange(e, "description")}
              value={description}
            />
          </label>
          <label className="price-section">
            판매가격
            <input
              className="price-input"
              placeholder="판매 가격을 입력해주세요"
              onChange={(e) => handleChange(e, "price")}
              value={price}
              ref={priceRef}
            />
          </label>
          <section className="tag-section">
            태그
            <div className="show-tag">
              <input
                className="tag-input"
                placeholder="태그를 입력해주세요"
                onChange={(e) => handleChange(e, "tag")}
                value={tag}
                onKeyDown={(e) => appendTag(e)}
              />
              <div className="tag-list">
                <ul>
                  {tagList.map((tag, index) => (
                    <li key={index}>
                      #{tag}
                      <button
                        className="delete-button"
                        onClick={() => {
                          deleteTag(tag);
                        }}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default AddItem;

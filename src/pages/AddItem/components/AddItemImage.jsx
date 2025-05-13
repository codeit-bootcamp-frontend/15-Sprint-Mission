// src/pages/AddItem/components/AddItemImage.jsx
import plusImage from "/icons/ic_plus.png";
import deleteImage from "/icons/ic_x_button.png";
import { useState, useRef } from "react";
import {
  addItemImageContainer,
  addItemImageButtonContainer,
  addItemImageButtonStyle,
  previewImageContainer,
  previewImageStyle,
  deleteImageStyle,
  errorMessageStyle,
} from "./AddItemImage.styles";

function AddItemImage({ onImageChange }) {
  const [preview, setPreview] = useState("");
  const uploadImg = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = () => {
    if (preview) {
      setErrorMessage("*이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }
    uploadImg.current?.click();
  };

  const handlePreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
      onImageChange(file); // 선택한 이미지 전달
    }
  };

  const handleDelete = () => {
    setPreview("");
    uploadImg.current.value = null;
    onImageChange(null); // 이미지 삭제 시 null 전달
    setErrorMessage("");
  };

  return (
    <article css={addItemImageContainer}>
      <h3>상품 이미지</h3>
      <div>
        <div css={addItemImageButtonContainer}>
          <button onClick={handleImageUpload} css={addItemImageButtonStyle}>
            <img src={plusImage} alt="이미지 등록" />
            <p>이미지 등록</p>
          </button>
          <div css={previewImageContainer}>
            {preview && (
              <img
                src={preview}
                alt="이미지 미리보기"
                css={previewImageStyle}
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePreview}
              ref={uploadImg}
              style={{ display: "none" }}
            />
            <img
              src={deleteImage}
              alt="이미지 삭제"
              onClick={handleDelete}
              css={deleteImageStyle}
            />
          </div>
        </div>
        {errorMessage && <p css={errorMessageStyle}>{errorMessage}</p>}
      </div>
    </article>
  );
}

export default AddItemImage;

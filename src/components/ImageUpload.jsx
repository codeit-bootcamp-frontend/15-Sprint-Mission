import { useRef, useState } from "react";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setImageUrl(null);
    inputRef.current.value = "";
  };

  return (
    <div className="image-upload-wrapper">
      <p className="image-upload-title">상품 이미지</p>
      <div className="image-upload-container">
        <label className="image-upload-box">
          <span className="image-upload-plus">＋</span>
          <span className="image-upload-text">이미지 등록</span>
          <input
            type="file"
            accept="image/*"
            className="image-upload-input"
            ref={inputRef}
            onChange={handleImageChange}
            disabled={imageUrl !== null}
          />
        </label>
        {imageUrl && (
          <div className="image-preview">
            <img src={imageUrl} alt="preview" />
            <button className="image-remove" onClick={handleDelete}>
              ×
            </button>
          </div>
        )}
      </div>
      {imageUrl && <p className="image-upload-warning">*이미지 등록은 최대 1개까지 가능합니다.</p>}
    </div>
  );
};

export default ImageUpload;

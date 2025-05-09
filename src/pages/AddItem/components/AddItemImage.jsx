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
} from "./AddItemImage.styles";

function AddItemImage() {
  const [preview, setPreview] = useState(""); // 초기값을 빈 문자열로 설정
  const uploadImg = useRef(null); // useRef 초기화

  const handleImageUpload = () => {
    uploadImg.current?.click(); // 파일 입력 클릭
  };

  const handlePreview = (e) => {
    // 파일 객체에 대해 임시 URL 생성하여 preview set
    if (e.target.files && e.target.files.length > 0) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDelete = () => {
    setPreview(""); // 미리보기 삭제
    uploadImg.current.value = null; // 파일 입력 초기화
  };

  return (
    <article css={addItemImageContainer}>
      <h3>상품 이미지</h3>
      <div css={addItemImageButtonContainer}>
        <button onClick={handleImageUpload} css={addItemImageButtonStyle}>
          <img src={plusImage} alt="이미지 등록" />
          <p>이미지 등록</p>
        </button>
        <div css={previewImageContainer}>
          {preview && (
            <img src={preview} alt="이미지 미리보기" css={previewImageStyle} />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handlePreview}
            ref={uploadImg}
            style={{ display: "none" }} // 파일 입력 숨기기
          />
          <img
            src={deleteImage}
            alt="이미지 삭제"
            onClick={handleDelete}
            css={deleteImageStyle}
          />
        </div>
      </div>
    </article>
  );
}

export default AddItemImage;

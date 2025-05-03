import React, { useState } from 'react';
import styles from '../styles/AddItemImage.module.css';

export default function AddItemImage() {
  const [fileImg, setFileImg] = useState(null);
  const handleFileChange = (e) => {
    setFileImg(e.target.files[0]);
  }
  return (
    <div className={styles.addItemImage}>
      <input type='file' name='file' id='file' onChange={handleFileChange} />
      <label htmlFor='file'>
        <img src='/public/images/common/ic_plus.svg' alt='이미지 등록' />
        이미지 등록
      </label>
      {fileImg && (
        <div className={styles.addItemImagePreview}>
          <img src={fileImg ? URL.createObjectURL(fileImg) : ''} alt='이미지 미리보기' />
          <button type='button' onClick={() => setFileImg(null)}>
          <img src='/public/images/common/ic_tag_x.svg' alt='이미지 삭제' />
          </button>
        </div>
      )}
    </div>
  );
}

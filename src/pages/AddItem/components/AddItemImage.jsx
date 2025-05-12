import React, { useState } from 'react';
import styles from '../styles/AddItemImage.module.css';

export default function AddItemImage() {
  const [fileImg, setFileImg] = useState(null);
  const [showFileLimitAlert , setShowFileLimitAlert ] = useState(false);
  const handleFileChange = (e) => {
    if (fileImg) {
      setShowFileLimitAlert (true);
      e.target.value = '';
      return;
    }
    setFileImg(e.target.files[0]);
    setShowFileLimitAlert (false);
  }
  const handleRemoveFile = () => {
    setFileImg(null);
    setShowFileLimitAlert(false);
  };
  return (
    <>
      <div className={styles.addItemImage}>
        <input type='file' name='file' id='file' onChange={handleFileChange} />
        <label htmlFor='file'>
          <img src='/images/common/ic_plus.svg' alt='이미지 등록' />
          이미지 등록
        </label>
        {fileImg && (
          <div className={styles.addItemImagePreview}>
            <img src={fileImg ? URL.createObjectURL(fileImg) : ''} alt='이미지 미리보기' />
            <button type='button' onClick={handleRemoveFile}>
              <img src='/images/common/ic_tag_x.svg' alt='이미지 삭제' />
            </button>
          </div>
        )}
      </div>
      {showFileLimitAlert && <span className={styles.addItemImageAlert}>*이미지 등록은 최대 1개까지 가능합니다.</span>}
    </>
  );
}

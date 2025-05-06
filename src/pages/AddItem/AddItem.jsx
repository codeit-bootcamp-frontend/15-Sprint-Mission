import { useState } from 'react';
import styles from './AddItem.module.scss';

export default function AddItem() {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(
        'https://panda-market-api.vercel.app/images/upload',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!res.ok) throw new Error('업로드 실패');

      const data = await res.json();
      // ✅ 업로드된 이미지 URL을 저장
      console.log(data);
      setImage(data.imageUrl); // 실제 응답 필드명에 따라 조정 필요
    } catch (err) {
      console.error(err);
      alert('이미지 업로드에 실패했습니다.'); // -> 나중에 토스트 만들어서 처리
    }
  };

  const handleRemoveImage = () => setImage(null);

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 등록 처리 나중에
    alert('상품이 등록되었습니다.');
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>상품 등록하기</h2>
        <button className={styles.submitButton} onClick={handleSubmit}>
          등록
        </button>
      </div>

      <form className={styles.form}>
        <div className={styles.imageSection}>
          {!image && (
            <label className={styles.imageUpload}>
              <span>+</span>
              <p>이미지 등록</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
            </label>
          )}
          {image && (
            <div className={styles.imagePreview}>
              <img src={image} alt="Preview product image" />
              <button
                className={styles.removeImage}
                onClick={handleRemoveImage}
                type="button"
              />
            </div>
          )}
          <p className={styles.warning}>
            *이미지 등록은 최대 1개까지 가능합니다. // 에러메시지 처리
          </p>
        </div>

        <label>
          <p>상품명</p>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label>
          <p>상품 소개</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </label>

        <label>
          <p>판매가격</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          <p>태그</p>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="입력 후 Enter"
          />
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
                <button type="button" onClick={() => handleRemoveTag(tag)} />
              </span>
            ))}
          </div>
        </label>
      </form>
    </div>
  );
}

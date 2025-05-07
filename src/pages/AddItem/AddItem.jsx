import { useState } from 'react';
import { ImageUploader, TagInput, AddItemForm } from '@/components/AddItem';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import styles from './AddItem.module.scss';

const AddItem = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [showImageWarning, setShowImageWarning] = useState(false);

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', imageFile); // ← 여기서 imageFile 사용
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('tags', JSON.stringify(tags)); // 또는 서버 요구 형식에 맞게 변환

    try {
      const res = await fetch('https://api.example.com/products', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('등록 실패');

      alert('상품이 등록되었습니다!');
    } catch (err) {
      console.error(err);
      alert('상품 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>상품 등록하기</h2>
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>

      <form className={formStyles.form}>
        <ImageUploader
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          setImageFile={setImageFile}
          showImageWarning={showImageWarning}
          setShowImageWarning={setShowImageWarning}
        />

        <AddItemForm
          productName={productName}
          setProductName={setProductName}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
        />

        <TagInput
          tagInput={tagInput}
          setTagInput={setTagInput}
          tags={tags}
          setTags={setTags}
        />
      </form>
    </div>
  );
};

export default AddItem;

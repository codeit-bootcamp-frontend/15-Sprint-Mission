import { useState } from 'react';
import { useAddItemForm } from '@/hooks';
import { ImageUploader, TagInput, AddItemForm } from '@/components/AddItem';
import { addItemValidation } from '@/utils/validators';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import styles from './AddItem.module.scss';

const initialForm = {
  imageFile: null,
  productName: '',
  description: '',
  price: '',
  tags: [],
};

const AddItem = () => {
  const { formData, isFormValid, handleInputChange } = useAddItemForm(
    initialForm,
    addItemValidation,
  );

  const [imagePreview, setImagePreview] = useState(null);
  const [showImageWarning, setShowImageWarning] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('image', formData.imageFile);
    form.append('productName', formData.productName);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('tags', JSON.stringify(formData.tags));

    try {
      const res = await fetch('https://api.example.com/products', {
        method: 'POST',
        body: form,
      });

      if (!res.ok) throw new Error('등록 실패');
      alert('상품이 등록되었습니다!'); // * 여기 나중에 처리
    } catch (err) {
      console.error(err);
      alert('상품 등록 중 오류가 발생했습니다.'); // * 여기 나중에 처리
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
          disabled={!isFormValid}
        >
          등록
        </button>
      </div>

      <form className={formStyles.form}>
        <ImageUploader
          handleInputChange={handleInputChange}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          showImageWarning={showImageWarning}
          setShowImageWarning={setShowImageWarning}
        />

        <AddItemForm
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <TagInput
          tagInput={tagInput}
          setTagInput={setTagInput}
          tags={formData.tags}
          handleInputChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default AddItem;

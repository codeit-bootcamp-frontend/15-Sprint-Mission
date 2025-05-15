import { useRef, useState } from 'react';
import * as S from './addPage.styles';
import FormHeader from '../components/FormHeader/FormHeader';
import FormImageUpload from '../components/FormImageUpload/FormImageUpload';
import FormInputs from '../components/FormInputs/FormInputs';
import FormTags from '../components/FormTags/FormTags';

const AddPage = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const isFormValid =
    imagePreview &&
    tags.length > 0 &&
    name.trim() !== '' &&
    description.trim() !== '' &&
    price.trim() !== '';

  const handleImageClick = () => {
    if (imagePreview) {
      setErrorMessage('*이미지 등록은 최대 1개까지 가능합니다.');
      return;
    }
    setErrorMessage('');
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setErrorMessage('');
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmed = tagInput.trim();
      if (!trimmed || tags.includes(trimmed)) return;
      setTags([...tags, trimmed]);
      setTagInput('');
    }
  };

  const handleTagRemove = (removeIndex) => {
    setTags(tags.filter((_, index) => index !== removeIndex));
  };

  return (
    <>
      <form css={S.formStyle}>
        <FormHeader isFormValid={isFormValid} />

        <div css={S.formMainStyle}>
          <FormImageUpload
            imagePreview={imagePreview}
            onClick={handleImageClick}
            onChange={handleFileChange}
            onRemove={handleImageRemove}
            errorMessage={errorMessage}
            fileInputRef={fileInputRef}
          />

					<FormInputs
            name={name}
            onNameChange={setName}
            description={description}
            onDescriptionChange={setDescription}
            price={price}
            onPriceChange={setPrice}
          />
          <FormTags
            tagInput={tagInput}
            tags={tags}
            onTagInputChange={handleTagInputChange}
            onTagKeyDown={handleTagKeyDown}
            onTagRemove={handleTagRemove}
          />
        </div>
      </form>
    </>
  );
};

export default AddPage;

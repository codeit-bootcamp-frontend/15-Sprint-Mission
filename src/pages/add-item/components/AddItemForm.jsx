import Input from '../../../components/input';
import { useState, useRef, useEffect } from 'react';
import TagInput from './TagInput';

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    tag: [],
    img: null,
  });

  const [tagInput, setTagInput] = useState('');
  const [productImg, setProductImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [isSubmitable, setIsSubmitable] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const { name, description, price, tag } = formData;
    const allFilled =
      name.trim() &&
      description.trim() &&
      price.trim() &&
      Array.isArray(tag) &&
      tag.length > 0;
    setIsSubmitable(!!allFilled);
  }, [formData]);

  const handleImgUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setProductImg(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);

    setFormData((prev) => ({
      ...prev,
      img: file,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = tagInput.trim();
      if (value && !formData.tag.includes(value)) {
        setFormData((prev) => ({
          ...prev,
          tag: [...prev.tag, value],
        }));
        setTagInput('');
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tag: prev.tag.filter((tag) => tag !== tagToRemove),
    }));
  };

  const imgOnClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='p-4'>
      <form>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-[2rem] font-[700]'>상품 등록하기</p>
          <button
            type='submit'
            disabled={!isSubmitable}
            className={`px-[2.3rem] py-[1.2rem] rounded text-[1.6rem] ${
              isSubmitable
                ? 'bg-[#3692ff] text-white cursor-pointer'
                : 'bg-[#9ca3af] text-gray-600 cursor-not-allowed'
            }`}
          >
            등록
          </button>
        </div>

        <div className='mb-4'>
          <button
            type='button'
            onClick={imgOnClick}
            className='px-4 py-2 bg-[#9ca3af] hover:bg-gray-400 rounded'
          >
            이미지 등록
          </button>
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleImgUpload}
            style={{ display: 'none' }}
          />
        </div>

        {previewImg && (
          <div className='mb-4'>
            <img
              src={previewImg}
              alt='preview'
              className='w-[28.2rem] h-[28.2rem] object-cover border rounded aspect-square'
            />
          </div>
        )}

        <div className='flex flex-col gap-10'>
          <Input
            type='text'
            placeholder='상품명을 입력해주세요'
            inputName='상품명'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            type='textarea'
            placeholder='상품소개를 입력해주세요'
            inputName='상품 소개'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />

          <Input
            type='text'
            placeholder='판매 가격을 입력해주세요'
            inputName='판매가격'
            name='price'
            value={formData.price}
            onChange={handleChange}
          />

          <TagInput
            tagInput={tagInput}
            handleTagChange={handleTagChange}
            handleTagKeyDown={handleTagKeyDown}
            tag={formData.tag}
            handleRemoveTag={handleRemoveTag}
          />
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;

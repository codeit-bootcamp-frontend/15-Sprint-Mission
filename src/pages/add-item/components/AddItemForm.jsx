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
          <p className='text-[2rem] font-bold leading-none'>상품 등록하기</p>
          <button
            type='submit'
            disabled={!isSubmitable}
            className={`h-[4.4rem] px-[2rem] rounded text-[1.6rem] font-[400] ${
              isSubmitable
                ? 'bg-[#3692ff] text-white cursor-pointer'
                : 'bg-[#9ca3af] text-gray-600 cursor-not-allowed'
            }`}
          >
            등록
          </button>
        </div>

        <div className='mb-4 mt-6'>
          <p className='mb-2 font-[700] text-[2rem] text-[#1F2937]'>
            상품 이미지
          </p>
          <div className='flex gap-4'>
            <div
              onClick={imgOnClick}
              className='w-[16.8rem] h-[16.8rem] sm:w-[28.2rem] sm:h-[28.2rem] bg-[#f3f4f6] rounded flex flex-col items-center justify-center cursor-pointer'
            >
              <div className='text-[#9ca3af] text-[2rem] mb-1'>+</div>
              <div className='text-[#9ca3af] text-[1.6rem]'>이미지 등록</div>
            </div>

            {previewImg && (
              <div className='relative w-[16.8rem] h-[16.8rem] sm:w-[28.2rem] sm:h-[28.2rem]'>
                <img
                  src={previewImg}
                  alt='preview'
                  className='w-full h-full object-cover border rounded'
                />
                <button
                  type='button'
                  onClick={() => {
                    setPreviewImg(null);
                    setProductImg(null);
                    setFormData((prev) => ({ ...prev, img: null }));
                    if (fileInputRef.current) fileInputRef.current.value = '';
                  }}
                  className='absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center'
                >
                  <span className='text-gray-600 text-lg'>×</span>
                </button>
              </div>
            )}
          </div>

          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleImgUpload}
            style={{ display: 'none' }}
          />
        </div>

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

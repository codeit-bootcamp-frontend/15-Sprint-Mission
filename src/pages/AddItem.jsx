import { useState } from "react";
import addImg from "../assets/images/add-Image.png";
import Input from "../components/Input";

export default function AddItem() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const isFormValid =
    selectedImage &&
    productName.trim() &&
    productDescription.trim() &&
    productPrice.trim();

  const handleImageClick = (event) => {
    if (selectedImage) {
      event.preventDefault();
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  const onImageChange = (event) => {
    if (selectedImage) {
      setShowWarning(true);
      return;
    }

    const {
      target: { files },
    } = event;

    if (files && files[0]) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
      setShowWarning(false);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    setShowWarning(false);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="max-w-[120rem] mx-auto p-7">
      {/* <p>상태 확인: {isFormValid ? "✅ 유효함" : "❌ 유효하지 않음"}</p> */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-8"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[1.6rem] font-[700] text-[#1F2937]">
            상품 등록하기
          </h1>
          <button
            type="submit"
            disabled={!isFormValid}
            className="py-2.5 px-4 rounded-md transition-colors text-white cursor-pointer
             bg-[#3692FF] disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            등록
          </button>
        </div>

        <h3 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
          상품 이미지
        </h3>
        <div className="flex items-start gap-6">
          <label htmlFor="photo" className="flex">
            <img
              className="w-full h-full max-w-[25rem] max-h-[25rem]"
              onClick={handleImageClick}
              src={addImg}
              role="button"
              aria-disabled={!!selectedImage}
            />
          </label>
          <input
            onChange={onImageChange}
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            className="hidden"
          />

          {selectedImage && (
            <div className="relative w-full h-full max-w-[25rem] max-h-[25rem]">
              <img
                src={selectedImage}
                alt="선택된 상품 이미지"
                className="w-full h-full object-cover rounded-lg max-w-[25rem] max-h-[25rem]"
              />
              <button
                type="button"
                onClick={removeSelectedImage}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1.5 hover:bg-opacity-75 transition-opacity cursor-pointer"
                aria-label="이미지 삭제"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        {(showWarning || (selectedImage && !showWarning)) && (
          <p className="text-orange-600 text-sm mt-4">
            * 이미지 등록은 최대 1개까지 가능합니다.
          </p>
        )}

        <div>
          <label
            htmlFor="productName"
            className="block text-[1.4rem] font-[700] text-gray-700 mb-4"
          >
            상품명
          </label>
          <Input
            id="productName"
            placeholder="상품명을 입력해주세요"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="productDescription"
            className="block text-[1.4rem] font-[700] text-gray-700 mb-1"
          >
            상품 소개
          </label>
          <textarea
            id="productDescription"
            placeholder="상품 소개를 입력해주세요"
            rows="10"
            className="w-full p-4 bg-[#F3F4F6] placeholder:text-[#9CA3AF]"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="productPrice"
            className="block text-[1.4rem] font-[700] text-gray-700 mb-1"
          >
            판매가격
          </label>
          <Input
            id="productPrice"
            type="number"
            placeholder="판매 가격을 입력해주세요"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="productTags"
            className="block text-[1.4rem] font-[700] text-gray-700 mb-1"
          >
            태그
          </label>
          <Input
            id="productTags"
            placeholder="태그를 입력해주세요"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
          />
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-gray-100 text-black px-3 py-2 rounded-full flex items-center text-[1.2rem]"
              >
                #{tag}
                <div
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 bg-[#9CA3AF] p-1 rounded-full"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.08032 1L9.08032 9"
                      stroke="#F9FAFB"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9 1L1 9"
                      stroke="#F9FAFB"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

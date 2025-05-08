import { useState, useRef } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";
import plus from "../assets/icons/plus.svg";
import x from "../assets/icons/x.svg";

function AddItemPage() {
  const imgRef = useRef(null);
  const [imgPreview, setImgPreview] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDetail, setItemDetail] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const isFormValid = itemName && itemDetail && price && tags.length > 0;

  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImgPreview(previewUrl);
    }
  };
  const handleDeleteImg = () => {
    setImgPreview("");
    if (imgRef.current) {
      imgRef.current.value = null;
    }
  };

  const handleEnterTag = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };
  const handleDeleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div>
      <Header />
      <div className="max-w-1200 m-auto flex flex-col gap-24 pt-24 px-15 pb-52">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">상품 등록하기</div>
          <Button type="upload" disabled={!isFormValid}>
            등록
          </Button>
        </div>
        <div className="flex flex-col justify-center gap-16">
          <div className="text-2lg font-bold">상품 이미지</div>
          <div className="flex gap-10 pc:gap-24">
            <label className="flex flex-col justify-center items-center gap-12 size-168 pc:size-282 bg-gray100 text-gray400 text-lg font-regular rounded-xl cursor-pointer">
              <img className="size-48" src={plus} />
              이미지 등록
              <input
                className="hidden"
                type="file"
                onChange={handleUploadImg}
                ref={imgRef}
                disabled={imgPreview}
              />
            </label>
            {imgPreview ? (
              <>
                <img
                  className="size-168 pc:size-282 rounded-xl"
                  src={imgPreview}
                  alt="미리보기"
                />
                <img
                  className="relative right-40 pc:right-52 top-8 size-22 cursor-pointer"
                  src={x}
                  onClick={handleDeleteImg}
                />
              </>
            ) : (
              ""
            )}
          </div>
          {imgPreview ? (
            <div className="text-red text-lg font-regular">
              *이미지 등록은 최대 1개까지 가능합니다.
            </div>
          ) : (
            ""
          )}
        </div>
        <InputField
          type="input"
          label="상품명"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="상품명을 입력해주세요"
        />
        <InputField
          type="textarea"
          label="상품소개"
          value={itemDetail}
          onChange={(e) => setItemDetail(e.target.value)}
          placeholder="상품 소개를 입력해주세요"
        />
        <InputField
          type="input"
          label="판매가격"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="판매 가격을 입력해주세요"
        />
        <InputField
          type="input"
          label="태그"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleEnterTag}
          placeholder="태그를 입력해주세요"
        />
        <div className="flex gap-12">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="flex items-center gap-8 py-6 pl-16 pr-12 bg-gray100 rounded-[26px]"
              >
                #{tag}
                <img
                  className="size-22 cursor-pointer"
                  src={x}
                  onClick={() => handleDeleteTag(index)}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;

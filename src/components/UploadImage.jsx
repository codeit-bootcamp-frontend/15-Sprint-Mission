import { useState } from "react";
import PlusIcon from "../assets/icons/icon-plus.png";
import XIcon from "../assets/icons/icon-X.png";

const UploadImage = () => {
  const [preview, setPreview] = useState(null);
  const [isError, setIsError] = useState(false);
  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };
  const showError = () => {
    if (preview) setIsError(true);
  };
  const onDelete = () => {
    setPreview(null);
    setIsError(false);
  };
  return (
    <>
      <div className="pc:gap-24 flex gap-10">
        <label
          className="bg-secondary-100 pc:size-282 font-regular text-secondary-400 flex size-168 cursor-pointer flex-col items-center justify-center gap-12 rounded-[12px] text-lg"
          onClick={showError}
        >
          <img src={PlusIcon} alt="더하기" className="size-48" />
          이미지 등록
          {!preview && (
            <input type="file" className="hidden" onChange={uploadImage} />
          )}
        </label>
        {preview && (
          <div className="relative">
            <img
              src={preview}
              alt="미리보기"
              className="pc:size-282 size-168 rounded-[12px] object-cover"
            />
            <button
              className="absolute top-12 right-12 size-24 cursor-pointer"
              onClick={onDelete}
            >
              <img src={XIcon} alt="x버튼" />
            </button>
          </div>
        )}
      </div>
      {isError && (
        <p className="text-error-red font-regular font-lg">
          *이미지 등록은 최대 1개까지 가능합니다.
        </p>
      )}
    </>
  );
};
export default UploadImage;

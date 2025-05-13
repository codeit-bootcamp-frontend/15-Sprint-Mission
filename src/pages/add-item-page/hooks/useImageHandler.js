import { useCallback } from "react";
import { toast } from "react-toastify";

const IMAGE_ALREADY_EXISTS_MESSAGE = "이미지 등록은 최대 1개까지 가능합니다.";

export const useImageHandler = (setImageUrl) => {
  const handleImageChange = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImageUrl((prevUrl) => {
          if (prevUrl) {
            toast(IMAGE_ALREADY_EXISTS_MESSAGE);
          }
          return imageUrl;
        });
      }
    },
    [setImageUrl]
  );

  const handleImageDelete = useCallback(() => {
    setImageUrl("");
  }, [setImageUrl]);

  return { handleImageChange, handleImageDelete };
};

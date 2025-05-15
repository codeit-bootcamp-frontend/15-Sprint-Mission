import NotFoundImg from "@assets/imgs/notFoundImage@2x.png";

export const useProductDetailHandlers = (imgRef) => {
  const handleImgError = () => {
    if (imgRef?.current && imgRef.current.src !== NotFoundImg) {
      imgRef.current.src = NotFoundImg;
    }
  };

  const handleEditClick = () => {
    console.log("수정 클릭");
  };

  const handleDeleteClick = () => {
    console.log("삭제 클릭");
  };

  return {
    handleImgError,
    handleEditClick,
    handleDeleteClick,
  };
};

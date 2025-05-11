const ItemCreateButton = () => {
  const handleClick = () => {
    console.log("상품 등록하기 버튼");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary-100 px-23 py-8 rounded-[10px] cursor-pointer text-secondary-100 font-semibold text-lg-line-height-26"
    >
      상품 등록하기
    </button>
  );
};

export default ItemCreateButton;

import { useNavigate } from "react-router";

const ItemCreateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("상품 등록하기 버튼");
    navigate("/additem");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary-100 w-133 h-42 px-23 py-8 rounded-[10px] cursor-pointer text-secondary-100 font-semibold text-lg-line-height-26"
    >
      상품 등록하기
    </button>
  );
};

export default ItemCreateButton;

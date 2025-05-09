import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import search from "../assets/icons/search.svg";

function ItemControl({ isMobile, options }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/additem");
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="flex justify-between items-center gap-8">
            <div className="text-xl text-gray900 font-bold flex-1">
              전체상품
            </div>
            <Button onClick={handleButtonClick}>상품 등록하기</Button>
          </div>
          <div className="flex justify-between items-center gap-8 relative">
            <div className="flex justify-between items-center gap-4 flex-1">
              <img className="absolute left-12" src={search} />
              <input
                className="bg-gray100 rounded-xl text-gray400 py-9 pl-36 flex-1"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <Dropdown options={options} isMobile={isMobile} />
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center gap-12">
            <div className="text-xl text-gray900 font-bold flex-1">
              전체상품
            </div>
            <div className="flex justify-between items-center gap-8 w-242 relative">
              <img className="absolute left-12" src={search} />
              <input
                className="bg-gray100 rounded-xl text-gray400 py-9 pl-36 flex-1"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <Button onClick={handleButtonClick}>상품 등록하기</Button>
            <Dropdown options={options} isMobile={isMobile} />
          </div>
        </>
      )}
    </>
  );
}

export default ItemControl;

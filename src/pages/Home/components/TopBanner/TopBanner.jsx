import { useNavigate } from "react-router-dom";
import topImage from "../../../../assets/images/img_home_top.svg";
import "./TopBanner.css";
const TopBanner = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/items");
  };
  return (
    <section className="top-banner">
      <div className="content">
        <div className="text-section">
          <p>
            일상의 모든 물건을
            <br /> 거래해 보세요
          </p>
          <button onClick={handleClick}> 구경하러 가기</button>
        </div>
        <div className="image-section">
          <img src={topImage} alt="상단 이미지" />
        </div>
      </div>
    </section>
  );
};

export default TopBanner;

import bottomImage from "../../../../assets/images/img_home_bottom.svg";
import "./BottomBanner.css";
const BottomBanner = () => {
  return (
    <section className="bottom-banner">
      <div className="content">
        <div className="text-section">
          <p>
            믿을 수 있는
            <br /> 판다마켓 중고 거래
          </p>
        </div>
        <div className="image-section">
          <img src={bottomImage} alt="하단단 이미지" />
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;

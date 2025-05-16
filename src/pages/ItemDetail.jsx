import { useNavigate } from "react-router-dom";
import CommentList from "../components/CommentList";
import InquiryInput from "../components/InquiryInput";
import ProductInfo from "../components/ProductInfo";
import ic_back from "../assets/ic_back.png";
import "./ItemDetail.css";

const ItemDetail = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/items");
    }
  };

  return (
    <div className="item-detail__container">
      <ProductInfo />
      <InquiryInput />
      <CommentList />
      <button className="item-detail__back-button">
        <span>목록으로 돌아가기</span>
        <img src={ic_back} alt="뒤로가기" className="item-detail__back-icon" onClick={handleGoBack} />
      </button>
    </div>
  );
};

export default ItemDetail;

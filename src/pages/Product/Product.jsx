import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Comment from "./components/Comment/Comment";
import "./Product.css";
import goback from "../../assets/images/go_back.svg";

const Product = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/items");
  };
  return (
    <>
      <Header />
      <ProductInfo />
      <Comment />
      <button onClick={onClickButton} className="goback-button">
        목록으로 돌아가기
        <img src={goback} alt="돌아가기" />
      </button>
    </>
  );
};

export default Product;

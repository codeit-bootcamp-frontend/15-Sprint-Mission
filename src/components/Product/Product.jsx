import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getProduct from "../../API/getProduct";
import styles from "./Product.module.scss";
import blankProfile from "../../image/blankProfile.svg";
import favorite from "../../image/favoriteCount.svg";
import postComment from "../../API/postComment";
import Comments from "../Comments/Comments";
import getComments from "../../API/getComments";
import { useNavigate } from "react-router";

export default function Product() {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const productIdNum = Number(productId);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await getProduct(productIdNum);
        setProduct(product);
      } catch (error) {
        console.log("상품 정보 불러오기 실패:", error);
      }
    }
    fetchProduct();
  }, []);

  if (!product) return <div>로딩 중...</div>;

  const {
    favoriteCount,
    images,
    tags,
    name,
    description,
    price,
    ownerNickname,
    createdAt,
  } = product;

  const [year, month, day] = createdAt.split("T")[0].split("-");
  const formattedDate = `${year}. ${month}. ${day}`;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      postComment(productIdNum, message);
      setMessage("");
    } catch (error) {
      console.log("문의 등록 실패:", error);
      alert("문의 등록이 실패했습니다. 다시 시도해주세요.");
    }
  }

  return (
    <div className={styles["product-page"]}>
      <section className={styles["product"]}>
        <img
          src={images}
          className={styles["product__image"]}
          alt="상품 이미지"
        />
        <div className={styles["product__content-wrapper"]}>
          <h1 className={styles["product__name"]}>{name}</h1>
          <h2 className={styles["product__price"]}>{price.toLocaleString()}</h2>

          <h3 className={styles["product__subheading"]}>상품 소개</h3>
          <p className={styles["product__description"]}>{description}</p>

          <h3 className={styles["product__subheading"]}>상품 태그</h3>
          <ul className={styles["product__tags"]}>
            {tags.map((tag, index) => (
              <li key={index}>#{tag}</li>
            ))}
          </ul>

          <div className={styles["product__info-footer"]}>
            <img
              className={styles["info__image"]}
              src={blankProfile}
              alt="profile image"
            />
            <span className={styles["info__name"]}>{ownerNickname}</span>
            <span className={styles["info__date"]}>{formattedDate}</span>
            <div className={styles["info__count"]}>
              <img src={favorite} alt="heart" />
              <span>{favoriteCount}</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["question"]}>
        <form onSubmit={() => handleSubmit}>
          <label htmlFor="comment" className={styles["question__title"]}>
            문의하기
          </label>
          <textarea
            className={styles["question__textarea"]}
            id="comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <div className={styles["submit-button"]}>
            <button
              className={`${styles["submit-button-none"]} ${
                message.trim() ? styles.active : ""
              }`}
            >
              등록
            </button>
          </div>
        </form>
      </section>
      <section className={styles["comments"]}>
        <Comments productIdNum={productIdNum} />
      </section>
      <button
        className={styles["back-button"]}
        onClick={() => navigate("/items")}
      >
        목록으로 돌아가기
      </button>
    </div>
  );
}

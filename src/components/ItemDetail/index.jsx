import getProductById from "../../api/getItemById";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./styles/DetailContent.module.css";
import ItemDescription from "./ItemDescription";
import AskSection from "./AskSection";
import getItemComment from "../../api/getItemComment";
import Review from "./component/Review";

function DetailContent() {
  const { productId } = useParams();
  const [items, setItems] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemData, commentData] = await Promise.all([
          getProductById(productId),
          getItemComment({ id: productId }),
        ]);
        setItems(itemData);
        setComments(commentData.list);
      } catch (error) {
        console.error("데이터 불러오기 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading || !items) {
    return <p>상품 정보를 불러오는 중입니다...</p>;
  }

  console.log(comments);

  return (
    <main className={styles.main}>
      <ItemDescription items={items} />
      <AskSection />
      <section className={styles.review}>
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <Review key={index} comment={comment} />
          ))}
      </section>

      <section className={styles.backBtnContainer}>
        <Link to="/item" className={styles.backBtn} type="button">
          <div className={styles.backBtnText}>
            <p>목록으로 돌아가기</p>
            <img src="/ic_back.svg" alt="뒤로가기 아이콘" />
          </div>
        </Link>
      </section>
    </main>
  );
}

export default DetailContent;

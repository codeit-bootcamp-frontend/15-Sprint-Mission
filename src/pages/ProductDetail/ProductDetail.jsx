import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getProductDetail from "../../api/getProductDetail";
import getProductComments from "../../api/getProductComments";
import heartIcon from "../../assets/icon/heart-icon.svg";
import backIcon from "../../assets/icon/back-icon.png";
import kebabIcon from "../../assets/icon/kebab-icon.svg";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductDetail(productId);
        const commentData = await getProductComments(productId);
        setProduct(productData);
        setComments(Array.isArray(commentData?.list) ? commentData.list : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [productId]);

  if (!product) return <div>로딩 중...</div>;

  const handleUpdateComment = (commentId) => {
    const updatedComments = comments.map((cmt) =>
      cmt.id === commentId ? { ...cmt, content: editingContent } : cmt
    );
    setComments(updatedComments);
    setEditingCommentId(null);
    setEditingContent("");
  };

  return (
    <div className={styles.productDetail}>
      <section className={styles.productContainer}>
        <img
          src={product.images[0] || "/no-img.svg"}
          alt={product.name}
          className={styles.productImage}
        />
        <div className={styles.productMeta}>
          <header className={styles.productHeader}>
            <div className={styles.headerTitles}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productPrice}>
                {product.price.toLocaleString()}원
              </p>
            </div>
            <img src={kebabIcon} alt="점 아이콘" className={styles.kebabIcon} />
          </header>

          <section className={styles.productDescription}>
            <h3 className={styles.sectionTitle}>상품 소개</h3>
            <p className={styles.descriptionText}>{product.description}</p>
          </section>

          <section className={styles.productTags}>
            <h3 className={styles.sectionTitle}>상품 태그</h3>
            <div className={styles.tagList}>
              {product.tags.map((tag, i) => (
                <span key={i} className={styles.tagItem}>
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          <footer className={styles.productFooter}>
            <div className={styles.owner}>
              <img
                src="/profile.svg"
                alt="프로필 이미지"
                className={styles.titleAvatar}
              />
              <div className={styles.ownerInfo}>
                <p className={styles.ownerName}> {product.ownerNickname}</p>
                <p className={styles.postedDate}>
                  {new Date(product.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button type="button" className={styles.favorite}>
              <div className={styles.heartCount}>
                <img
                  src={heartIcon}
                  alt="하트 아이콘"
                  className={styles.heart}
                />
                <span className={styles.count}>{product.favoriteCount}</span>
              </div>
            </button>
          </footer>
        </div>
      </section>

      <section className={styles.commentSection}>
        <h3 className={styles.commentSectionTitle}>문의하기</h3>
        <div className={styles.commentForm}>
          <textarea
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className={styles.commentInput}
          />
          <button
            type="button"
            className={styles.submitButton}
            disabled={!commentInput.trim()}
          >
            등록
          </button>
        </div>

        {comments.length === 0 ? (
          <div className={styles.emptyComment}>
            <img
              src="/panda-empty.svg"
              alt="비어있음"
              className={styles.emptyImage}
            />
            <p className={styles.emptyText}>아직 문의가 없어요</p>
          </div>
        ) : (
          <div className={styles.commentList}>
            {comments.map((comment) =>
              editingCommentId === comment.id ? (
                <div key={comment.id} className={styles.commentItem2}>
                  <textarea
                    className={styles.editTextarea}
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                  />
                  <div className={styles.commentActios}>
                    <button
                      onClick={() => {
                        setEditingCommentId(null);
                        setEditingContent("");
                      }}
                      className={styles.cancelButton}
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUpdateComment(comment.id)}
                      className={styles.saveButton}
                    >
                      수정 완료
                    </button>
                  </div>
                </div>
              ) : (
                <div key={comment.id} className={styles.commentItem}>
                  <div className={styles.comment}>
                    <p className={styles.commentText}>{comment.content}</p>
                    <div className={styles.metaRow}>
                      <img
                        src="/profile.svg"
                        alt={comment.writer.nickname}
                        className={styles.avatar}
                      />
                      <div className={styles.commentContent}>
                        <p className={styles.nickname}>
                          {comment.writer.nickname}
                        </p>
                        <p className={styles.date}>
                          {new Date(comment.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.menuWrapper}>
                    <button
                      type="button"
                      className={styles.menuButton}
                      onClick={() =>
                        setOpenMenuId((prev) =>
                          prev === comment.id ? null : comment.id
                        )
                      }
                    >
                      <img
                        src={kebabIcon}
                        alt="점 아이콘"
                        className={styles.kebabIcon}
                      />
                    </button>

                    {openMenuId === comment.id && (
                      <div className={styles.dropdown}>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCommentId(comment.id);
                            setEditingContent(comment.content);
                            setOpenMenuId(null);
                          }}
                        >
                          수정하기
                        </button>
                        <button type="button">삭제하기</button>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>

      <button
        type="button"
        onClick={() => navigate("/items")}
        className={styles.backButton}
      >
        목록으로 돌아가기
        <img src={backIcon} alt="돌아가기 아이콘" className={styles.back} />
      </button>
    </div>
  );
};

export default ProductDetail;

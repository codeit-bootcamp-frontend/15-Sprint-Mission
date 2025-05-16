import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api/productApi";
import { formatTime } from "../utils/formatTime";
import ic_kebab from "../assets/ic_kebab.png";
import userImage from "../assets/userImage.png";
import "./CommentList.css";
import Img_inquiry_empty from "../assets/Img_inquiry_empty.png";

const CommentList = () => {
  const { productId } = useParams();
  const [comments, setComments] = useState([]);
  const [editCommentId, setEditCommentId] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments(productId, 3);
        setComments(data.list);
      } catch (err) {
        console.error("댓글을 불러오지 못했습니다.", err);
      }
    };

    fetchComments();
  }, [productId]);

  // 드롭다운 토글 함수
  const toggleDropdown = (commentId) => {
    setOpenDropdownId(openDropdownId === commentId ? null : commentId);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdownId && !event.target.closest(".comment-list__dropdown-toggle")) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownId]);

  return (
    <div className="comment-list">
      {comments.length === 0 ? (
        <div className="comment-list__empty">
          <img src={Img_inquiry_empty} alt="empty" />
          <p>아직 문의가 없어요</p>
        </div>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="comment-list__item">
            {editCommentId === comment.id ? (
              <div className="comment-list__edit-box">
                <textarea className="comment-list__edit-textarea" defaultValue={comment.content} />
                <div className="comment-list__edit-buttons">
                  <button onClick={() => setEditCommentId(null)}>취소</button>
                  <button>수정 완료</button>
                </div>
              </div>
            ) : (
              <p className="comment-list__content">{comment.content}</p>
            )}
            <div className="comment-list__info">
              <div className="comment-list__user">
                <img src={userImage} alt="userProfile" className="comment-list__user-image" />
                <div>
                  <p className="comment-list__nickname">{comment.writer.nickname}</p>
                  <p className="comment-list__created-at">{formatTime(new Date(comment.createdAt))}</p>
                </div>
              </div>
              <div className="comment-list__actions">
                {editCommentId !== comment.id && (
                  <div className="comment-list__dropdown-toggle">
                    <img src={ic_kebab} alt="kebab" className="comment-list__kebab" onClick={() => toggleDropdown(comment.id)} />
                    {openDropdownId === comment.id && (
                      <div className="comment-list__dropdown">
                        <button
                          onClick={() => {
                            setEditCommentId(comment.id);
                            setOpenDropdownId(null);
                          }}
                        >
                          수정하기
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;

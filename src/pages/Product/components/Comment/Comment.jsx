import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../../../api/getComments";
import "./Comment.css";

import option from "../../../../assets/images/ic_options.svg";
import profile from "../../../../assets/images/ic_profile.svg";
import noComment from "../../../../assets/images/no_comment.svg";

const Comment = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeEditIndex, setActiveEditIndex] = useState(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const activeDropdownRef = useRef(null);

  useEffect(() => {
    async function getItemInfo() {
      const comments = await getComments({ id });
      setComments(comments.list);
      setLoading(false);
    }

    getItemInfo();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdownIndex(null);
      }
    };

    if (activeDropdownIndex || activeDropdownIndex === 0) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDropdownIndex]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        activeDropdownRef.current &&
        !activeDropdownRef.current.contains(e.target)
      ) {
        setActiveDropdownIndex(null);
      }
    }

    if (activeDropdownIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdownIndex]);

  function toggleDropdown(index) {
    setActiveDropdownIndex((prev) => (prev === index ? null : index));
  }

  function timeAgo(dateInput) {
    const date = new Date(dateInput);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds}초 전`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}분 전`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}시간 전`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}일 전`;
    const weeks = Math.floor(days / 7);
    if (weeks < 5) return `${weeks}주 전`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}개월 전`;
    const years = Math.floor(days / 365);
    return `${years}년 전`;
  }

  return (
    <>
      <div className="comment-section">
        <div className="make-comment">
          <label htmlFor="comment-input" className="comment-label">
            문의하기
          </label>
          <textarea
            id="comment-input"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            className="comment-input"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
          <button className="register-button" disabled={content.trim() === ""}>
            등록
          </button>
        </div>

        {loading ? (
          <ul className="comment-list">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="comment">
                <div className="comment-detail">
                  <div className="skeleton text" style={{ width: "70%" }}></div>
                </div>
                <div className="user-info">
                  <div className="user-image">
                    <div className="skeleton avatar"></div>
                  </div>
                  <div className="user-text">
                    <div
                      className="skeleton text"
                      style={{ width: "10%" }}
                    ></div>
                    <div
                      className="skeleton text"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : comments.length === 0 ? (
          <div className="no-comments">
            <img src={noComment} />
            <p>아직 문의가 없어요.</p>
          </div>
        ) : (
          <ul className="comment-list">
            {comments.map((comment, index) => (
              <li key={index} className="comment">
                <div className="comment-detail">
                  {activeEditIndex === index && isEdit ? (
                    <textarea
                      className="comment-edit"
                      defaultValue={comment.content}
                    />
                  ) : (
                    <>
                      <div className="content">{comment.content}</div>
                      <div className="option">
                        <button
                          className="option-button"
                          onClick={() => toggleDropdown(index)}
                        >
                          <img src={option} alt="설정" />
                        </button>
                        {activeDropdownIndex === index && (
                          <div
                            className="orderby-dropdown"
                            ref={activeDropdownRef}
                          >
                            <div
                              className="first-option"
                              onClick={() => {
                                setIsEdit(true);
                                setActiveEditIndex(index);
                              }}
                            >
                              수정하기
                            </div>
                            <div
                              className="second-option"
                              onClick={() => {
                                alert("삭제 완료! (기능구현x)");
                                setActiveDropdownIndex(null);
                              }}
                            >
                              삭제하기
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className="user-info">
                  <div className="user-image">
                    <img
                      src={comment.writer.image ?? profile}
                      alt="프로필 이미지"
                    />
                  </div>
                  <div className="user-text">
                    <div className="user-name">{comment.writer.nickname}</div>
                    <div className="date">{timeAgo(comment.createdAt)}</div>
                  </div>
                  {activeEditIndex === index && isEdit && (
                    <div className="edit-buttons">
                      <button
                        className="cancel"
                        onClick={() => {
                          setIsEdit(false);
                          setActiveDropdownIndex(null);
                        }}
                      >
                        취소
                      </button>
                      <button
                        className="edit"
                        onClick={() => {
                          alert("수정 완료! (기능구현x)");
                          setIsEdit(false);
                          setActiveDropdownIndex(null);
                        }}
                      >
                        수정 완료
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Comment;

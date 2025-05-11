import { productCommentAPI } from "@/api/productCommentAPi";
import { commentAPI } from "@/api/commentAPI";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import ko from "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime"; // relativeTime 플러그인
import settingIcon from "/icons/ic_setting.svg";
import defaultProfile from "/icons/profile.png";
import {
  CommentListContainer,
  CommentListStyle,
  CommentItem,
  SettingIcon,
  CommentProfile,
  CommentProfileContainer,
  CommentProfileInfo,
  CommentDate,
  SettingContainer,
  SettingButtonTop,
  SettingButtonBottom,
} from "./CommentList.styles";

// dayjs에 relativeTime 플러그인 확장
dayjs.extend(relativeTime);
dayjs.locale(ko);

function CommentList() {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [settingStates, setSettingStates] = useState({}); // 각 댓글의 설정 상태를 관리하는 객체

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await productCommentAPI.getProductComment(productId);
        setComments(res.list || []);
      } catch (error) {
        console.error("댓글을 불러오는 데 실패했습니다.", error);
        setComments([]);
      }
    };
    fetchComments();
  }, [productId]);

  const handleSetting = async (commentId) => {
    try {
      await commentAPI.patchComment(commentId);
      setSettingStates((prev) => ({ ...prev, [commentId]: false })); // 해당 댓글의 설정 상태를 false로 변경
    } catch (error) {
      console.error("댓글 수정 실패", error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await commentAPI.deleteComment(commentId);
      setSettingStates((prev) => ({ ...prev, [commentId]: false })); // 해당 댓글의 설정 상태를 false로 변경
    } catch (error) {
      console.error("댓글 삭제 실패", error);
    }
  };

  const toggleSetting = (commentId) => {
    setSettingStates((prev) => ({
      ...prev,
      [commentId]: !prev[commentId], // 클릭한 댓글의 설정 상태를 토글
    }));
  };

  return (
    <section css={CommentListContainer}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} css={CommentListStyle}>
            <div css={CommentItem}>
              <p>{comment.content}</p>
              <div css={CommentProfileContainer}>
                <img
                  src={comment.writer.image || defaultProfile}
                  alt="profile"
                  onError={(e) => {
                    e.target.src = defaultProfile;
                  }}
                  css={CommentProfile}
                />
                <div css={CommentProfileInfo}>
                  <span>{comment.writer.nickname}</span>
                  <span css={CommentDate}>
                    {dayjs(comment.updatedAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            <img
              src={settingIcon}
              alt="setting"
              css={SettingIcon}
              onClick={() => toggleSetting(comment.id)} // 클릭 시 설정 상태 토글
            />
            {settingStates[comment.id] && ( // 해당 댓글의 설정 상태가 true일 때만 표시
              <div css={SettingContainer}>
                <button
                  css={SettingButtonTop}
                  onClick={() => handleSetting(comment.id)}
                >
                  수정
                </button>
                <button
                  css={SettingButtonBottom}
                  onClick={() => handleDelete(comment.id)}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>댓글이 없습니다.</div>
      )}
    </section>
  );
}

export default CommentList;

import { useState } from "react";
import dayjs from "dayjs";
import ko from "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  CommentListStyle,
  CommentItemContainer,
  CommentProfile,
  CommentProfileContainer,
  CommentProfileInfo,
  CommentDate,
  SettingIconStyle,
  SettingContainer,
  SettingButtonTop,
  SettingButtonBottom,
} from "./CommentList.styles";
import settingIcon from "/icons/ic_setting.svg";
import defaultProfile from "/icons/profile.png";
import CommentEdit from "./CommentEdit";
import { commentAPI } from "@/api/commentAPI";

dayjs.extend(relativeTime);
dayjs.locale(ko);

const CommentItem = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [settingStates, setSettingStates] = useState({});

  const toggleSetting = (commentId) => {
    setSettingStates((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const handleEdit = async (commentId) => {
    try {
      setSettingStates((prev) => ({ ...prev, [commentId]: false })); // 설정 비활성화
      setIsEditing(!isEditing);
    } catch (error) {
      console.error("댓글 수정 실패", error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await commentAPI.deleteComment(commentId);
      setSettingStates((prev) => ({ ...prev, [commentId]: false })); // 설정 비활성화
      console.log(comment.content);
    } catch (error) {
      console.error("댓글 삭제 실패", error);
    }
  };

  return (
    <div css={CommentListStyle}>
      <div css={CommentItemContainer(isEditing)}>
        {isEditing ? (
          <CommentEdit comment={comment} setIsEditing={setIsEditing} />
        ) : (
          <>
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
          </>
        )}
      </div>
      <img
        src={settingIcon}
        alt="setting"
        css={SettingIconStyle(isEditing)}
        onClick={() => toggleSetting(comment.id)}
      />
      {settingStates[comment.id] && ( // 해당 댓글의 설정 상태가 true일 때만 표시
        <div css={SettingContainer}>
          <button css={SettingButtonTop} onClick={() => handleEdit(comment.id)}>
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
  );
};

export default CommentItem;

import {
  CommentEditInput,
  CommentProfileContainer,
  CommentProfile,
  CommentProfileInfo,
  CommentDate,
} from "./CommentList.styles";
import defaultProfile from "/icons/profile.png";
import dayjs from "dayjs";
import ko from "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { commentAPI } from "@/api/commentAPI";

dayjs.extend(relativeTime);
dayjs.locale(ko);

export default function CommentEdit({ comment, setIsEditing }) {
  const [editedContent, setEditedContent] = useState(comment.content);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await commentAPI.patchComment(comment.id, editedContent);
      setIsEditing(false);
    } catch (error) {
      console.error("댓글 수정 실패", error);
    } finally {
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <div>로딩 중...</div>
  ) : (
    <>
      <textarea
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        css={CommentEditInput}
      />
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
          <span css={CommentDate}>{dayjs(comment.updatedAt).fromNow()}</span>
        </div>
        <button onClick={() => setIsEditing(false)}>취소</button>
        <button onClick={handleSave}>수정 완료</button>
      </div>
    </>
  );
}

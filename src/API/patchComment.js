import { api } from "./api";
export default async function deleteComment(commentId, newContent) {
  const res = await api.patch(`/comments/${commentId}`, {
    content: newContent,
  });
  return res.data;
}

import { api } from "./api";

export default async function deleteComment(commentId) {
  const res = await api.delete(`/comments/${commentId}`);
  return res.data;
}

import baseAPI from "./axios";

export const commentAPI = {
  patchComment: async (commentId) => {
    try {
      const response = await baseAPI.patch(`/comments/${commentId}`);
      return response.data;
    } catch (error) {
      console.error("댓글 수정 실패", error);
      throw new Error("댓글 수정 실패");
    }
  },
  deleteComment: async (commentId) => {
    try {
      const response = await baseAPI.delete(`/comments/${commentId}`);
      return response.data;
    } catch (error) {
      console.error("댓글 삭제 실패", error);
      throw new Error("댓글 삭제 실패");
    }
  },
};

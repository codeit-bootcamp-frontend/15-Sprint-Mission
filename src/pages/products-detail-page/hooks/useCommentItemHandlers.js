export const useCommentItemHandlers = (setIsEdit) => {
  const cancelEdit = () => setIsEdit(false);
  const confirmEdit = () => setIsEdit(false);
  const handleEditClick = () => setIsEdit(true);
  const handleDeleteClick = () => console.log("댓글 삭제 로직");

  return { cancelEdit, confirmEdit, handleEditClick, handleDeleteClick };
};

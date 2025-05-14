export const relativeTime = (createdTime) => {
  const currentTime = new Date();
  const commentTime = new Date(createdTime);
  const diffTime = Math.floor((currentTime - commentTime) / (1000 * 60)); // 분 단위로 변환
  
  if (diffTime < 1) return '방금 전';
  if (diffTime < 60) return `${diffTime}분 전`;
  
  const diffHours = Math.floor(diffTime / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;
  
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays}일 전`;
  
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return `${diffMonths}개월 전`;
  
  return `${Math.floor(diffMonths / 12)}년 전`;
};

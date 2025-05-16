export default function timeSince(time) {
  const now = new Date();
  const updated = new Date(time);
  const diffInSeconds = Math.floor((now - updated) / 1000);
  if (diffInSeconds < 60) {
    return `${diffInSeconds}초 전`;
  }
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 365) {
    return `${diffInDays}일 전`;
  }
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}년 전`;
}

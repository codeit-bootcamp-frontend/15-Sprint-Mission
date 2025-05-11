export const isoDate = (isoDate) => {
  return new Date(isoDate).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

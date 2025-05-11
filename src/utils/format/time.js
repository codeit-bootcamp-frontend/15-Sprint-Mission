export const relativeTime = (isoDate) => {
  const now = new Date();
  const date = new Date(isoDate);
  const diff = (now - date) / 1000;

  const rtf = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });

  if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  if (diff < 604800) return rtf.format(-Math.floor(diff / 86400), 'day');
  // return date.toLocaleDateString('ko-KR'); // 일주일 이상은 그냥 날짜로

  if (diff < 2592000) return rtf.format(-Math.floor(diff / 604800), 'week');
  if (diff < 31536000) return rtf.format(-Math.floor(diff / 2592000), 'month');
  return rtf.format(-Math.floor(diff / 31536000), 'year');
};

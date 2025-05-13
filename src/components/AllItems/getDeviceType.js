export default function getDeviceType() {
  const width = document.documentElement.clientWidth;
  if (width <= 376) return "mobile";
  if (width <= 744) return "tablet";
  return "desktop";
}

export default function handleResize(deviceType, allItems, setShowItems) {
  if (deviceType === "tablet") {
    setShowItems(allItems.slice(0, 6));
    console.log("tablet");
  } else if (deviceType === "mobile") {
    setShowItems(allItems.slice(0, 4));
    console.log("mobile");
  } else {
    setShowItems(allItems.slice(0, 10));
    console.log("desktop");
  }
}

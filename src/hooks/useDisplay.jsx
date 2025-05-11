import { useEffect, useState } from "react";

const getDisplay = () => {
  if (window.innerWidth < 768) return "mobile";
  else if (window.innerWidth < 1200) return "tablet";
  else return "pc";
};

const useDisplay = () => {
  const [display, setDisplay] = useState(getDisplay());
  useEffect(() => {
    const handleResize = () => {
      setDisplay(getDisplay());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return display;
};
export default useDisplay;

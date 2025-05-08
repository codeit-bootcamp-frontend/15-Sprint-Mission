import { useState, useEffect } from "react";

import Header from "../../components/Header";
import BestItems from "./components/BestItems/BestItems";
import AllItems from "./components/AllItems/AllItems";

const getDeviceType = (width) => {
  if (width < 768) return "mobile";
  if (width < 1200) return "tablet";
  return "desktop";
};

const Market = () => {
  const [deviceType, setDeviceType] = useState(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <BestItems deviceType={deviceType} />
      <AllItems deviceType={deviceType} />
    </>
  );
};

export default Market;

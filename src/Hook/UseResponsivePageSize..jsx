import { useEffect, useState } from "react";

const useResponsivePageSize = ({ desktop, tablet, mobile }) => {
  const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 768) return mobile; // 0~767
    if (width < 1200) return tablet; // 768~1199
    return desktop; // 1200 이상
  };

  const [size, setSize] = useState(getPageSize);

  useEffect(() => {
    const handleResize = () => {
      const newSize = getPageSize();
      setSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useResponsivePageSize;

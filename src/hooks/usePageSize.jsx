import { useEffect, useState } from "react";

const usePageSize = (defaultSize, smallSize, mediumSize) => {
  const getSize = () => {
    if (window.innerWidth < 740) return smallSize;
    if (window.innerWidth < 1200) return mediumSize;
    return defaultSize;
  };

  const [size, setSize] = useState(getSize); // 초기 값 계산 함수 전달

  useEffect(() => { 
    const updateSize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return size;
};

export default usePageSize;
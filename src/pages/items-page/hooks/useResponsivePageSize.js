import { useState, useEffect, useCallback } from "react";
import { breakpoints } from "@constants/breakpoints";

/**
 * 화면 너비에 따라 서버에서 받아올 데이터의 개수(pageSize)를 설정하는 커스텀 훅
 * @param {{ desktop: number, tablet: number, mobile: number }} config - 각 해상도별 pageSize 값
 * @param {Function} [onChange] - pageSize setter
 */
export const useResponsivePageSize = (config, onChange) => {
  const [pageSize, setPageSize] = useState(1);

  const updatePageSize = useCallback(() => {
    const width = window.innerWidth;
    let newSize;

    if (width >= parseInt(breakpoints.desktop)) {
      newSize = config.desktop;
    } else if (width >= parseInt(breakpoints.tablet)) {
      newSize = config.tablet;
    } else {
      newSize = config.mobile;
    }

    setPageSize(newSize);
    if (onChange) onChange(newSize);
  }, [config, onChange]);

  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, [updatePageSize]);

  return pageSize;
};

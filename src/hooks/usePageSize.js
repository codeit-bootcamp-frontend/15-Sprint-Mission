import { useState, useEffect } from 'react';
import { useMediaQuery } from './useMediaQuery';

export const usePageSize = () => {
  const { isMobile, isTablet } = useMediaQuery();
  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);

  useEffect(() => {
    let newPageSize = 10;
    let newBestPageSize = 4;

    if (isMobile) {
      newPageSize = 4;
      newBestPageSize = 1;
    } else if (isTablet) {
      newPageSize = 6;
      newBestPageSize = 2;
    }

    setPageSize(newPageSize);
    setBestPageSize(newBestPageSize);
  }, [isMobile, isTablet]);

  return { pageSize, bestPageSize, setPageSize };
};

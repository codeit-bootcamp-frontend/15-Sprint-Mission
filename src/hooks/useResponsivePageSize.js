import { useEffect, useState } from 'react';

const useResponsivePageSize = () => {
  const [pageSize, setPageSize] = useState(() => {
    const width = window.innerWidth;
    if (width <= 767) return 4;
    if (width <= 1199) return 6;
    return 10;
  });

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width <= 767) setPageSize(4);
      else if (width <= 1199) setPageSize(6);
      else setPageSize(10);
    };

    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  return pageSize;
};

export default useResponsivePageSize;

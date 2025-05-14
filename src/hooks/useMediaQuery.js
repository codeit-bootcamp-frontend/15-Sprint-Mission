import { useMediaQuery as useResponsive } from 'react-responsive';

export const useMediaQuery = () => {
  const isMobile = useResponsive({ query: '(max-width: 425px)' });
  const isTablet = useResponsive({ query: '(min-width: 426px) and (max-width: 768px)' });

  return { isMobile, isTablet };
};

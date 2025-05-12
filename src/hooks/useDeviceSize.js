import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  if (typeof query !== "string") {
    throw new Error("미디어 쿼리는 string 타입이어야 합니다.");
  }

  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);
    updateMatch();

    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

const useDeviceSize = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return { isDesktop, isTablet, isMobile };
};

export default useDeviceSize;

import { useEffect, useState } from "react";
import axios from "axios";

// 디바이스 너비에 따라 페이지 사이즈 계산
const getPageSize = (mobileSize = 4, tabletSize = 6, pcSize = 10) => {
  const width = window.innerWidth;
  if (width <= 744) return mobileSize;
  if (width < 1200) return tabletSize;
  return pcSize;
};

/**
 * 아이템을 가져오는 커스텀 훅
 * @param {Object} options - 옵션
 * @param {string} options.orderBy - 정렬 기준 ('recent', 'favorite' 등)
 * @param {number} options.initialPage - 가져올 페이지 (기본값 1)
 * @param {Array} options.sizes - [mobile, tablet, pc] 사이즈 설정
 */
const useItems = ({
  orderBy = "recent",
  initialPage = 1,
  sizes = [4, 6, 10],
}) => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(() => getPageSize(...sizes));

  useEffect(() => {
    const updatePageSize = () => {
      setPageSize(getPageSize(...sizes));
    };

    window.addEventListener("resize", updatePageSize);

    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products",
          {
            params: {
              page: initialPage,
              pageSize,
              orderBy,
            },
            headers: {
              Accept: "application/json",
            },
          }
        );
        setItems(response.data.list || []);
      } catch (error) {
        console.error("상품을 불러오는 데 실패했습니다.", error);
      }
    };

    fetchItems();

    return () => {
      window.removeEventListener("resize", updatePageSize);
    };
  }, [pageSize, orderBy, initialPage, sizes]);

  return { items, pageSize };
};

export default useItems;

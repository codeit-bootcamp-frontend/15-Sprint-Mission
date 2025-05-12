import { useEffect, useState } from "react";
import { getItems } from "../apis/itemApi";
import Magnify from "../assets/icons/icon_magnify";
import BestProductList from "../components/BestProducts";
import AllProductList from "../components/AllProductList";
import { Link } from "react-router-dom";
import Hamburger from "../assets/icons/icon_hamburger";
import LeftChevron from "../assets/icons/icon_left-chevron";
import RightChevron from "../assets/icons/icon_right-chevron";

export default function Products() {
  const [bestItems, setBestItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  const getAllItems = async () => {
    try {
      const data = await getItems({ page, pageSize, orderBy });
      setAllItems(data?.list || []);
      setTotalCount(data?.totalCount || 0);
    } catch (error) {
      setError(error.message);
    }
  };

  const getBestItems = async () => {
    try {
      const data = await getItems({
        orderBy: "favorite",
        page: 1,
        pageSize: 4,
      });
      console.log("best", data);
      setBestItems(data.list);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await Promise.all([getBestItems(), getAllItems()]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, orderBy]);

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const getPageNumbers = () => {
    const offset = 5;
    const pages = [];
    let start = Math.max(1, page - Math.floor(offset / 2));
    let end = start + offset - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - offset + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (error) return <div>오류: {error}</div>;
  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div className="px-10 flex flex-col gap-5 items-center max-w-[120rem] m-auto ">
      <div className="flex flex-col gap-3">
        <div className="flex w-full">
          <h3 className="text-[2rem] font-[700] mt-10">베스트 상품</h3>
        </div>
        <BestProductList data={bestItems} />
      </div>
      <div>
        {/* ✅ 모바일 전용 정렬 UI */}
        <div className="flex flex-col w-full items-center justify-between gap-4 md:hidden">
          <div className="flex justify-between w-full">
            <h3 className="text-[2rem] font-[700]">전체 상품</h3>
            <Link
              to="/additem"
              className="bg-[#3692FF] text-white text-[1.4rem] rounded-2xl px-5 py-2 flex justify-center items-center"
            >
              상품 등록하기
            </Link>
          </div>

          <div className="flex justify-between w-full gap-5 relative">
            <div className="w-full relative">
              <Magnify />
              <input
                className="w-full py-3 px-14 rounded-2xl text-[1.4rem] bg-[#F3F4F6] text-[#9CA3AF]"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            {/* 햄버거 버튼 */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 border rounded-2xl"
            >
              <Hamburger />
            </button>

            {/* 드롭다운 메뉴 */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 top-[4.5rem] bg-white border rounded-xl shadow-md text-[1.4rem] z-10">
                <button
                  onClick={() => {
                    setOrderBy("recent");
                    setPage(1);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-5 py-2 hover:bg-gray-100 w-full text-left"
                >
                  최신순
                </button>
                <button
                  onClick={() => {
                    setOrderBy("favorite");
                    setPage(1);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-5 py-2 hover:bg-gray-100 w-full text-left"
                >
                  좋아요순
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:flex w-full items-center justify-between">
          <div>
            <h3 className="text-[2rem] font-[700]">전체 상품</h3>
          </div>
          <div className="flex gap-5">
            <div className="w-full relative">
              <Magnify />
              <input
                className="w-[30rem] py-3 px-14 rounded-2xl text-[1.4rem] bg-[#F3F4F6] text-[#9CA3AF]"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <Link
              to="/additem"
              className="bg-[#3692FF] text-white text-[1.4rem] rounded-2xl px-5 py-2 flex justify-center items-center w-full"
            >
              상품 등록하기
            </Link>
            <select
              value={orderBy}
              onChange={handleOrderBy}
              className="rounded-2xl px-5 text-[1.4rem] border"
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
        <AllProductList data={allItems} />
        <div className="flex gap-2 mt-6 justify-center mb-10">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-3 py-3 size-10 sm:px-4 sm:py-2 bg-[#3692FF] text-white rounded-full disabled:bg-gray-300 text-sm md:text-base"
          >
            <LeftChevron />
          </button>
          {getPageNumbers().map((p) => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className={`px-3 py-3 size-10 rounded-full text-sm md:text-base flex justify-center items-center ${
                p === page
                  ? "bg-[#3692FF] text-white"
                  : "bg-gray-200 text-[#1F2937] hover:bg-gray-300"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={allItems.length < pageSize}
            className="px-3 py-3 size-10 sm:px-4 sm:py-2 bg-[#3692FF] text-white rounded-full disabled:bg-gray-300 text-sm md:text-base"
          >
            <RightChevron />
          </button>
        </div>
      </div>
    </div>
  );
}

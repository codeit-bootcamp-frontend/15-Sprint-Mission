import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import GetItems from './apis/GetItem';
import BestCard from './components/BestCard';
import useDeviceSize from './hooks/useDeviceSize';

import './App.css';
import ItemCard from './components/ItemCard';
export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);

  const { isMobile, isTablet } = useDeviceSize();

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetItems();
      setProducts(data);
    };

    fetchData();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    return sortType === 'likes'
      ? b.favoriteCount - a.favoriteCount
      : b.id - a.id;
  });

  const bestProducts = [...products]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, isMobile ? 1 : isTablet ? 2 : 4);

  const getProductsByPage = () => {
    if (isMobile) return 4;
    if (isTablet) return 6;
    return 10;
  };

  const ProductsPerPage = getProductsByPage();
  const totalPages = Math.ceil(sortedProducts.length / ProductsPerPage);

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * ProductsPerPage,
    currentPage * ProductsPerPage
  );

  return (
    <div className='bg-white h-screen'>
      <NavBar />
      <div className='  px-4 py-6 lg:px-[36rem] mt-[2.4rem]'>
        <h2 className='text-xl font-bold mb-4'>베스트 상품</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mb-10'>
          {bestProducts.map((product) => (
            <BestCard key={product.id} item={product} />
          ))}
        </div>

        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>전체 상품</h2>
          <div className='flex items-center gap-2'>
            <input
              type='text'
              placeholder='전체 상품을 검색해주세요'
              className='border px-3 py-2 rounded'
            />
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>
              상품 등록하기
            </button>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className='border px-2 py-1 rounded'
            >
              <option value='latest'>최신순</option>
              <option value='likes'>좋아요순</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 '>
          {paginatedProducts.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))}
        </div>

        <div className='flex justify-center gap-2'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

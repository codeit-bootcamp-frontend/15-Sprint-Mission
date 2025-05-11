import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { GetItems, GetFavoriteItems } from '../../apis/GetItem';
import BestCard from './components/BestCard';
import useDeviceSize from '../../hooks/useDeviceSize';
import ItemCard from './components/ItemCard';
import { useNavigate } from 'react-router-dom';

export default function ItemPage() {
  const [products, setProducts] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  const [sortType, setSortType] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const navigate = useNavigate();

  const { isMobile, isTablet } = useDeviceSize();

  const getProductsPerPage = () => {
    if (isMobile) return 4;
    if (isTablet) return 6;
    return 10;
  };

  const ProductsPerPage = getProductsPerPage();

  const totalPages = Math.ceil(totalCount / ProductsPerPage);

  const pageGroupSize = 5;

  const currentGroup = Math.ceil(currentPage / pageGroupSize);

  const startPage = (currentGroup - 1) * pageGroupSize + 1;

  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  useEffect(() => {
    const fetchFavorite = async () => {
      const { products, totalCount } = await GetItems(
        currentPage,
        ProductsPerPage,
        sortType
      );
      setProducts(products);
      setTotalCount(totalCount);
    };
    fetchFavorite();
  }, [currentPage, ProductsPerPage, sortType]);

  useEffect(() => {
    const fetchFavorite = async () => {
      const { products } = await GetFavoriteItems();
      setFavoriteProduct(products);
    };
    fetchFavorite();
  }, []);

  const topFavoriteProducts = [...favoriteProduct]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, isMobile ? 1 : isTablet ? 2 : 4);

  return (
    <>
      <NavBar />
      <div className='bg-white min-h-screen'>
        <div className='container mx-auto px-[1.6rem] md:px-[2.4rem] py-6 max-w-[120rem] mt-[2.4rem]'>
          <h2 className='text-3xl font-bold mb-4'>베스트 상품</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mb-10'>
            {topFavoriteProducts.map((product) => (
              <BestCard key={product.id} item={product} />
            ))}
          </div>

          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
            <h2 className='text-3xl font-bold'>전체 상품</h2>
            <div className='flex flex-wrap items-center gap-2 w-full md:w-auto'>
              <input
                type='text'
                placeholder='검색할 상품을 입력해주세요'
                className='border px-3 py-2 rounded flex-grow md:flex-grow-0 h-[4.2rem] text-2xl'
              />
              <button
                onClick={() => {
                  navigate('/additem');
                }}
                className='bg-blue-500 text-white px-[2.3rem] py-[1.2rem]  whitespace-nowrap text-2xl rounded-3xl cursor-pointer'
              >
                상품 등록하기
              </button>
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className='border px-2 py-1 rounded h-[4.2rem]'
              >
                <option value='recent'>최신순</option>
                <option value='favorite'>좋아요순</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1'>
            {products.map((product) => (
              <ItemCard key={product.id} item={product} />
            ))}
          </div>

          <div className='flex justify-center gap-2 mt-6'>
            {startPage > 1 && (
              <button
                onClick={() => setCurrentPage(startPage - 1)}
                className='px-3 py-1 rounded border bg-gray-200'
              >
                &lt;
              </button>
            )}

            {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
              const page = startPage + i;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === page
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {endPage < totalPages && (
              <button
                onClick={() => setCurrentPage(endPage + 1)}
                className='px-3 py-1 rounded border bg-gray-200'
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

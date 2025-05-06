import { useEffect, useState } from 'react';

import GetItems from './apis/GetItem';

import './App.css';
import ItemCard from './components/ItemCard';
export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('latest');

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetItems();
      setProducts(data);
    };

    fetchData();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    return sortType === 'likes' ? b.likes - a.likes : b.id - a.id;
  });

  const bestProducts = sortedProducts.slice(0, 4);

  return (
    <div className='bg-white h-screen'>
      <div className=' mx-auto px-4 py-6 lg:px-[360px]'>
        <h2 className='text-xl font-bold mb-4'>베스트 상품</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
          {bestProducts.map((product) => (
            <ItemCard key={product.id} item={product} />
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

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
          {sortedProducts.slice(0, 12).map((product) => (
            <ItemCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

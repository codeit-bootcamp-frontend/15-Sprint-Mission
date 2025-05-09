import { useParams, useLocation } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ItemDetailTop from './components/ItemDetailTop';
import ItemDetailInquiry from './components/ItemDetailInquiry';
import ItemDetailComment from './components/ItemDetailComment';
import { useNavigate } from 'react-router-dom';
import styles from './styles/index.module.css';

export default function ItemDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handleBackToList = () => {
    const prevQuery = location.state?.prevQuery || '';
    navigate(`/items${prevQuery}`);
  };

  return (
    <>
      <Header isNav />
      <div id='container' className='itemsPage'>
        <div className='inner04'>
          <ItemDetailTop productId={productId} />
          <ItemDetailInquiry />
          <ItemDetailComment productId={productId} />
          <button className={styles.backToList} onClick={handleBackToList}>목록으로 돌아가기 <img src="/images/common/ic_back.svg" alt="목록으로 돌아가기" /></button>
        </div>
      </div>
      <Footer />
    </>
  );
};


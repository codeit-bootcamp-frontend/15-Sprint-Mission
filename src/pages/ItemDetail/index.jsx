import { useParams } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ItemDetailTop from './components/ItemDetailTop';
import ItemDetailInquiry from './components/ItemDetailInquiry';
import ItemDetailComment from './components/ItemDetailComment';

export default function ItemDetail() {
  const { productId } = useParams();
  return (
    <>
      <Header isNav />
      <div id='container' className='itemsPage'>
        <div className='inner04'>
          <ItemDetailTop productId={productId} />
          <ItemDetailInquiry />
          <ItemDetailComment productId={productId} />
        </div>
      </div>
      <Footer />
    </>
  );
};


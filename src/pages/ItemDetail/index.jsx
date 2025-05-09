import { useParams } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ItemDetailTop from './components/ItemDetailTop';
import ItemDetailInquiry from './components/ItemDetailInquiry';

export default function ItemDetail() {
  const { productId } = useParams();
  return (
    <>
      <Header />
      <div id='container' className='itemsPage'>
        <div className='inner04'>
          <ItemDetailTop productId={productId} />
          <ItemDetailInquiry />
        </div>
      </div>
      <Footer />
    </>
  );
};


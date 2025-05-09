import { useParams } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ItemDetailTop from './components/ItemDetailTop';
import DetailInquiry from '@/components/Detail/DetailInquiry';
import DetailComment from '@/components/Detail/DetailComment';
import DetailBackToListButton from '@/components/Detail/DetailBackToListButton';

export default function ItemDetail() {
  const { productId } = useParams();
  return (
    <>
      <Header isNav />
      <div id='container' className='itemsPage'>
        <div className='inner04'>
          <ItemDetailTop productId={productId} />
          <DetailInquiry />
          <DetailComment productId={productId} />
          <DetailBackToListButton />
        </div>
      </div>
      <Footer />
    </>
  );
};


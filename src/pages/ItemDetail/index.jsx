import { useParams } from 'react-router-dom';
import { useProductDetail } from '@/hooks/useProductDetail';

const ItemDetail = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProductDetail(productId);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.favoriteCount}</p>
      <img src={product.images} alt='' />
      <p>{product.tags}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;

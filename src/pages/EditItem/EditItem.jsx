import { useParams } from 'react-router-dom';

const EditItem = () => {
  const { productId } = useParams();
  console.log('productId:', productId);
  console.log('📦 useParams:', productId);

  return (
    <div>
      <h2>상품 수정 페이지</h2>
      <p>상품 ID: {productId}</p>
      <p>⛏️ 만들어질 예정입니다!</p>
    </div>
  );
};

export default EditItem;

import { useParams } from "react-router-dom";
import { productIdAPI } from "@/api/productIdAPI";
import { useEffect } from "react";

const ProductId = () => {
  const { productId } = useParams(); // URL에서 productId 가져오기

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await productIdAPI.getProductId(productId); // productId 사용
        console.log(product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  return <main>{/* 상품 정보 표시 */}</main>;
};

export default ProductId;

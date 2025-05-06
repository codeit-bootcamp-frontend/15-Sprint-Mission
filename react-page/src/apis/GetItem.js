import axios from 'axios';

const API = 'https://panda-market-api.vercel.app/products';

const GetItems = async () => {
  try {
    const response = await axios.get(API);

    console.log(response.data.list);
    return response.data.list || [];
  } catch (error) {
    console.error('상품 데이터를 불러오지 못했습니다:', error);
    return [];
  }
};

export default GetItems;

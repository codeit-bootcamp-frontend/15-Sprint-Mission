import { Route, Routes } from 'react-router-dom';
import {
  Landing,
  SignUp,
  SignIn,
  Items,
  AddItem,
  ProductDetail,
} from '@/pages';
import App from '@/App';
import ROUTES from '@/constants/urls/routes';

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.ROOT} element={<App />}>
      <Route index element={<Landing />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.SIGNIN} element={<SignIn />} />
      <Route path={ROUTES.ITEMS} element={<Items />} />
      <Route path={ROUTES.ITEM_DETAIL()} element={<ProductDetail />} />
      <Route path={ROUTES.ADD_ITEM} element={<AddItem />} />
    </Route>
  </Routes>
);

export default AppRoutes;

// 노트: path=":productId"에서 ":productId"는 문자열이 아니라, "/items/무엇이든" 을 받되, 그 "무엇이든"을 productId라는 이름의 변수로 저장하는 역할

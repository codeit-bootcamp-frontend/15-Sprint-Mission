import { createBrowserRouter } from 'react-router-dom';
import { PAGE_URLS } from '@/constants/urls/page-urls';
import App from '@/App';
import Home from '@/pages/Home/Home';
import Signup from '@/pages/auth/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // path: '' 과 같음, 기본페이지로 보여줄 컴포넌트
        element: <Home />,
      },
      {
        path: PAGE_URLS.SIGNIN,
        element: <Signup />,
      },
    ],
  },
]);

export default router;

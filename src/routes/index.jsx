import { createBrowserRouter } from 'react-router-dom';
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
        path: '/signin',
        element: <Signup />,
      },
    ],
  },
]);

export default router;

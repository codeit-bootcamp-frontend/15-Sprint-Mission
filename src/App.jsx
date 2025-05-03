import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/common';
import layoutStyles from '@/styles/layout/layout.module.scss';

function App() {
  const location = useLocation();
  const isAuthPage = ['/signin', '/signup'].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Header />}
      <main className={layoutStyles.main}>
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;

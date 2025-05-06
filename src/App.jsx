import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/common';
import layoutStyles from '@/styles/layout/layout.module.scss';

function App() {
  const location = useLocation();
  const isAuthPage = ['/signin', '/signup'].includes(location.pathname);
  const isAuthOrLanding = ['/', '/signin', '/signup'].includes(
    location.pathname,
  );

  return (
    <div className={layoutStyles.layoutWrapper}>
      {!isAuthPage && <Header />}
      <main>
        <div className={isAuthOrLanding ? '' : layoutStyles.pageWrapper}>
          <Outlet />
        </div>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;

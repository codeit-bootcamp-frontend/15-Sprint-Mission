import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components/common';
import layoutStyles from '@/styles/layout/layout.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={layoutStyles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

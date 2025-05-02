import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components/common';

function App() {
  return (
    <>
      <Header />
      {/* <main>
        <Outlet />
      </main> */}
      <Footer />
    </>
  );
}

export default App;

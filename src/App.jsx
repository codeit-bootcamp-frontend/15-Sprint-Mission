// 공통 UI, 레이아웃(헤더, 푸터)
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* 공통 헤더 */}
      {/* <header>예: <Header /></header> */}

      {/* 페이지 컴포넌트 들어갈 자리 */}
      <main>
        <Outlet />
      </main>

      {/* 공통 푸터 */}
      {/* <footer>예: <Footer /></footer> */}
    </>
  );
}

export default App;

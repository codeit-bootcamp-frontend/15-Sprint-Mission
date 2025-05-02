// 공통 UI, 레이아웃(헤더, 푸터)
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;

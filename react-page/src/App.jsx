import { Routes, Route } from 'react-router-dom';
import ItemPage from './pages/ItemPage';

export default function App() {
  return (
    <Routes>
      <Route path='/items' element={<ItemPage />} />
    </Routes>
  );
}

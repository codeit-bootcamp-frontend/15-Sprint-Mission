import { Routes, Route } from 'react-router-dom';
import ItemPage from './pages/items';
import AddItem from './pages/add-item';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<ItemPage />} />
      <Route path='/items' element={<ItemPage />} />
      <Route path='/add' element={<AddItem />} />
    </Routes>
  );
}

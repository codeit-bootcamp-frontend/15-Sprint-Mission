import { Routes, Route } from 'react-router-dom';
import ItemPage from './pages/items';
import AddItem from './pages/add-item';
import IndexPage from './pages/indexPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/items' element={<ItemPage />} />
      <Route path='/additem' element={<AddItem />} />
    </Routes>
  );
}

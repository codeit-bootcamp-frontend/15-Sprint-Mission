import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Items from '../pages/Items';
import ItemDetail from '../pages/ItemDetail';
import Board from '../pages/Board';
import NotFound from '../pages/NotFound';
import AddItem from '../pages/AddItem';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/items' element={<Items />} />
      <Route path='/items/:productId' element={<ItemDetail />} /> 
      <Route path='/additem' element={<AddItem />} />
      <Route path='/board' element={<Board />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

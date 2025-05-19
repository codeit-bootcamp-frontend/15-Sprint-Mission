import './App.css'
import { Global } from '@emotion/react';
import { globalStyle } from './GlobalStyle';
import Header from './components/Header';
import Main from './components/pages/Main';
import FreeBoard from './components/pages/FreeBoard';
import Items from './components/pages/Items';
import { Route, Routes } from "react-router";
import AddItem from './components/pages/AddItem';
import ItemDetail from './components/pages/itemDetail/itemDetail';

function App() {

  return (
    <>
      <Global styles={globalStyle} />
        <Header />
    
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/freeBoard" element={<FreeBoard />} />
          <Route path="/items" element={<Items />} />
          <Route path="/additems" element={<AddItem />} />
          <Route path="/items/:productId" element={<ItemDetail />} />
        </Routes>
    </>
  )
}

export default App

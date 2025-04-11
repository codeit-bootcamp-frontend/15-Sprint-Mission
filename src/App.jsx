import './App.css';
import './styles/reset.css';
import './styles/layout.css';
import './styles/common.css';
import { useState, useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Items from './pages/Items';
import Board from './pages/Board';
import Notfound from './pages/Notfound';
import Home from './pages/Home';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
export { AuthStateContext, AuthDispatchContext };

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/items' element={<Items />} />
        <Route path='/board' element={<Board />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;

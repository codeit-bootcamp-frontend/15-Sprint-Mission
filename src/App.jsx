import { useState } from 'react'
import './App.css'
import './styles/reset.css'
import './styles/layout.css'
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Item from './pages/Item';
import Notfound from './pages/Notfound';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
export { AuthStateContext, AuthDispatchContext };

function App() {

  return (
    <>
      {/* <AuthStateContext.Provider value={}>
        <AuthDispatchContext.Provider value={{}}> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/item' element={<Item />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        {/* </AuthDispatchContext.Provider>
      </AuthStateContext.Provider> */}
    </>
  );
}

export default App

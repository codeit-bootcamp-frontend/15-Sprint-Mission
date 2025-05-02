import '@/assets/styles/reset.css';
import '@/assets/styles/base.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from '@/pages/home/Home';
import SignUp from '@/pages/auth/SignUp';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

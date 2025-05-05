import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, SignUp, SignIn, Items } from '@/pages';
import App from './App';
import '@/styles/common/index.css';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="items" element={<Items />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

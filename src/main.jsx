import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes';
import { ToastProvider, UserProvider } from '@/contexts';
import '@/styles/common/index.css';

const root = document.getElementById('root');

const mockUser = {
  id: 1,
  nickname: 'sienna',
  image: '/images/sienna-profile.png',
  updatedAt: '2025-05-12T13:05:18.035Z',
  createdAt: '2025-05-12T13:05:18.035Z',
};

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider user={mockUser}>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);

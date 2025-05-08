import './App.css';
import './styles/reset.css';
import './styles/layout.css';
import './styles/common.css';
import { createContext } from 'react';
import AppRoutes from './routes/AppRoutes';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
export { AuthStateContext, AuthDispatchContext };

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;

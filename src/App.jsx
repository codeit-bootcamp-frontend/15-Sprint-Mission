import './styles/index.css';
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

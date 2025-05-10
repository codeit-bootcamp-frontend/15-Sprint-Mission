import { Route, Routes } from 'react-router-dom';
import { Landing, SignUp, SignIn, Items, AddItem } from '@/pages';
import App from '@/App';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="items" element={<Items />} />
      <Route path="additem" element={<AddItem />} />
    </Route>
  </Routes>
);

export default AppRoutes;

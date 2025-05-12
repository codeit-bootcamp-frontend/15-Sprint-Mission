import './styles/Header.css'
import { useNavigate, NavLink, useLocation } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname === '/items' || location.pathname === '/additem' ? 'header02' : ''}`}>
      <div className='inner02'>
        <h1 className='header-logo'>
          <button onClick={() => navigate('/')}>
            <span className='blind'>판다마켓</span>
          </button>
        </h1>
        <nav className='header-nav'>
          <NavLink to='/board'>자유게시판</NavLink>
          <NavLink
            to='/items'
            className={({ isActive }) =>
              location.pathname === '/items' || location.pathname === '/additem' ? 'active' : ''
            }>
            중고마켓
          </NavLink>
        </nav>
        <button onClick={() => navigate('/login')} className='header-login'>
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;


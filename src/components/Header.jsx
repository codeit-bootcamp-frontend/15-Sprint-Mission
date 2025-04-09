import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <div className='inner02'>
        <h1 className='header-logo'>
          <button onClick={() => navigate('/')}>
            <span className='blind'>판다마켓</span>
          </button>
        </h1>
        <button onClick={() => navigate('/login')} className='header-login'>
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;


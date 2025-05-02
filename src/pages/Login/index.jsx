import { FORM_FIELDS } from '@/constants/formFields';
import AuthForm from '@/components/Auth/AuthForm';
import AuthSns from '@/components/Auth/AuthSns';
import '@/styles/auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();


  return (
    <div id='container' className='auth-page login'>
      <div className='inner03'>
        <button onClick={() => navigate('/')} className='auth-logo'>
          <img src='/images/sub/logo_big.svg' alt='판다마켓' />
        </button>
        <AuthForm formFields={[FORM_FIELDS.email, FORM_FIELDS.password]} onSubmit={() => navigate('/items')} submitButtonText='로그인' />
        <AuthSns />
      </div>
    </div>
  );
};

export default Login;

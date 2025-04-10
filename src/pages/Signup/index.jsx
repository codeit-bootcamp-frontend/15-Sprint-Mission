import { FORM_FIELDS } from '../../constants/formFields';
import AuthForm from '../../components/authForm';
import AuthSns from '../../components/AuthSns';
import '../../styles/auth.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div id='container' className='auth-page login'>
      <div className='inner03'>
        <button onClick={() => navigate('/')} className='auth-logo'>
          <img src='/images/sub/logo_big.svg' alt='판다마켓' />
        </button>
        <AuthForm
          formFields={[
            FORM_FIELDS.email,
            FORM_FIELDS.nickname,
            FORM_FIELDS.password,
            FORM_FIELDS.passwordCheck,
          ]}
          onSubmit={() => navigate('/items')}
          submitButtonText='회원가입'
        />
        <AuthSns />
      </div>
    </div>
  );
};

export default Signup;

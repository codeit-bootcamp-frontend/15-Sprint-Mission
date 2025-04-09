import AuthForm from '../../components/AuthForm';
import AuthSns from '../../components/AuthSns';

const Login = () => {
  return (
    <div className='inner03'>
      <a href='/' className='auth-logo'>
        <img src='/images/sub/logo_big.svg' alt='판다마켓' />
      </a>
      <AuthForm />
      <AuthSns /> 
      <p className='auth-signup'>
        판다마켓이 처음이신가요?<a href='/signup.html'>회원가입</a>
      </p>
    </div>
  );
};

export default Login;

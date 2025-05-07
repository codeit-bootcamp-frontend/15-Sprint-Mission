import { useNavigate } from 'react-router-dom';
import { useAuthForm } from '@/hooks';
import { AuthFormLayout } from '@/components/auth';
import { signUpValidation } from '@/utils/validators';
import { ROUTES } from '@/constants/urls';

const SignUp = () => {
  const navigate = useNavigate();
  const initialFormData = {
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  };
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    showPasswordStates,
    setShowPasswordStates,
    isFormValid,
    handleInputChange,
  } = useAuthForm(initialFormData, signUpValidation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate(ROUTES.SIGNIN);
  };

  return (
    <AuthFormLayout
      type="signup"
      formProps={{
        formData,
        setFormData,
        errors,
        setErrors,
        onSubmit: handleSubmit,
        showPasswordStates,
        togglePasswordVisibility: setShowPasswordStates,
        isFormValid,
        handleInputChange,
      }}
    />
  );
};

export default SignUp;

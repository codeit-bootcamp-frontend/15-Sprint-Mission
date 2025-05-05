import { useNavigate } from 'react-router-dom';
import { AuthFormLayout } from '@/components/auth';
import { ROUTES } from '@/constants/urls';
import { useForm } from '@/hooks';
import { signUpValidationRules } from '@/utils/validators';

const initialFormData = {
  email: '',
  nickname: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const navigate = useNavigate();
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    showPasswordStates,
    setShowPasswordStates,
    isFormValid,
    handleInputChange,
  } = useForm(initialFormData, signUpValidationRules);

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
        validationRules: signUpValidationRules,
        showPasswordStates,
        togglePasswordVisibility: setShowPasswordStates,
        isFormValid,
        handleInputChange,
      }}
    />
  );
};

export default SignUp;

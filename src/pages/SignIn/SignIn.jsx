import { useNavigate } from 'react-router-dom';
import { useAuthForm } from '@/hooks';
import { AuthFormLayout } from '@/components/auth';
import { signInValidation } from '@/utils/validators';
import { ROUTES } from '@/constants/urls';

const SignIn = () => {
  const navigate = useNavigate();
  const initialFormData = {
    email: '',
    password: '',
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
  } = useAuthForm(initialFormData, signInValidation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate(ROUTES.ROOT);
  };

  return (
    <AuthFormLayout
      type="signin"
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

export default SignIn;

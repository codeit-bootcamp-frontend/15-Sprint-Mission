import { useNavigate } from 'react-router-dom';
import { AuthFormLayout } from '@/components/auth';
import { ROUTES } from '@/constants/urls';
import { useForm } from '@/hooks';
import { signInValidationRules } from '@/utils/validators';

const initialFormData = {
  email: '',
  password: '',
};

const SignIn = () => {
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
  } = useForm(initialFormData, signInValidationRules);

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
        validationRules: signInValidationRules,
        showPasswordStates,
        togglePasswordVisibility: setShowPasswordStates,
        isFormValid,
        handleInputChange,
      }}
    />
  );
};

export default SignIn;

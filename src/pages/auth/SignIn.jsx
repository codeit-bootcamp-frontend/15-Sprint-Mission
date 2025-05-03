import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFormLayout } from '@/components/auth';
import validateEmail from '@/utils/validators/validateEmail';
import validatePassword from '@/utils/validators/validatePassword';
import { ROUTES } from '@/constants/urls';

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
  });

  const validationRules = {
    email: validateEmail,
    password: validatePassword,
  };

  const isFormValid =
    !validationRules.email(formData.email) &&
    !validationRules.password(formData.password);

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
        validationRules,
        showPasswordStates: showPassword,
        togglePasswordVisibility: setShowPassword,
        isFormValid,
      }}
    />
  );
};

export default SignIn;

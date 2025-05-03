import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthFormLayout from '@/components/auth/AuthFormLayout';
import AuthForm from '@/components/auth/AuthForm';
import { validateEmail } from '@/utils/validators';
import { ERROR_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/urls';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const validationRules = {
    email: (value) => {
      if (!value) return ERROR_MESSAGES.emailRequired;
      if (!validateEmail(value)) return ERROR_MESSAGES.invalidEmail;
      return '';
    },
    nickname: (value) => (!value ? ERROR_MESSAGES.nicknameRequired : ''),
    password: (value) => {
      if (!value) return ERROR_MESSAGES.passwordRequired;
      if (value.length < 8) return ERROR_MESSAGES.passwordLength;
      return '';
    },
    confirmPassword: (value, all) => {
      if (!value) return ERROR_MESSAGES.confirmPasswordRequired;
      if (value !== all.password) return ERROR_MESSAGES.passwordMismatch;
      return '';
    },
  };

  const isFormValid =
    formData.email &&
    validateEmail(formData.email) &&
    formData.nickname &&
    formData.password.length >= 8 &&
    formData.password === formData.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate(ROUTES.SIGNIN);
  };

  return (
    <AuthFormLayout type="signup">
      <AuthForm
        type="signup"
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        onSubmit={handleSubmit}
        validationRules={validationRules}
        showPasswordStates={showPassword}
        togglePasswordVisibility={setShowPassword}
        isFormValid={isFormValid}
      />
    </AuthFormLayout>
  );
};

export default SignUp;

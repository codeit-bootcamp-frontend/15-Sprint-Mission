import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFormLayout, AuthForm } from '@/components/auth';
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validateConfirmPassword,
} from '@/utils/validators';
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
    email: validateEmail,
    nickname: validateNickname,
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
  };

  const isFormValid =
    !validationRules.email(formData.email) &&
    !validationRules.nickname(formData.nickname) &&
    !validationRules.password(formData.password) &&
    !validationRules.confirmPassword(formData.confirmPassword, formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate(ROUTES.SIGNIN);
  };

  return (
    <AuthFormLayout>
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

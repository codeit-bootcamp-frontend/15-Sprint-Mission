import { AuthInput, OAuthButtons } from '@/components/auth';
import styles from './AuthForm.module.scss';

const AuthForm = ({
  type,
  formData,
  setFormData,
  errors,
  setErrors,
  onSubmit,
  validationRules,
  showPasswordStates,
  togglePasswordVisibility,
  isFormValid,
}) => {
  const handleChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);

    const fieldError = validationRules[field](value, updatedFormData);

    const newErrors = {
      ...errors,
      [field]: fieldError,
    };

    if (
      field === 'password' &&
      updatedFormData.confirmPassword &&
      validationRules.confirmPassword
    ) {
      newErrors.confirmPassword = validationRules.confirmPassword(
        updatedFormData.confirmPassword,
        updatedFormData,
      );
    }

    if (field === 'confirmPassword') {
      newErrors.confirmPassword = validationRules.confirmPassword(
        value,
        updatedFormData,
      );
    }

    setErrors(newErrors);
  };

  return (
    <form className={styles.authForm} data-auth-type={type}>
      {formData.email !== undefined && (
        <AuthInput
          id="email"
          label="이메일"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={errors.email}
          placeholder="이메일을 입력해주세요"
        />
      )}

      {formData.nickname !== undefined && (
        <AuthInput
          id="nickname"
          label="닉네임"
          value={formData.nickname}
          onChange={(e) => handleChange('nickname', e.target.value)}
          error={errors.nickname}
          placeholder="닉네임을 입력해주세요"
        />
      )}

      {formData.password !== undefined && (
        <AuthInput
          id="password"
          label="비밀번호"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          isVisible={showPasswordStates.password}
          onToggle={() =>
            togglePasswordVisibility((prev) => ({
              ...prev,
              password: !prev.password,
            }))
          }
          error={errors.password}
        />
      )}

      {formData.confirmPassword !== undefined && (
        <AuthInput
          id="confirmPassword"
          label="비밀번호 확인"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          isVisible={showPasswordStates.confirmPassword}
          onToggle={() =>
            togglePasswordVisibility((prev) => ({
              ...prev,
              confirmPassword: !prev.confirmPassword,
            }))
          }
          error={errors.confirmPassword}
        />
      )}

      <button
        type="submit"
        className={styles.authButton}
        disabled={!isFormValid}
        onClick={onSubmit}
      >
        {type === 'signup' ? '회원가입' : '로그인'}
      </button>

      <OAuthButtons />
    </form>
  );
};

export default AuthForm;

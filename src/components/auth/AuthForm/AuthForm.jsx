import { AuthInput, OAuthButtons } from '@/components/auth';
import styles from './AuthForm.module.scss';

const AuthForm = ({
  type,
  formData,
  errors,
  onSubmit,
  showPasswordStates,
  togglePasswordVisibility,
  isFormValid,
  handleInputChange,
}) => {
  return (
    <form className={styles.authForm} data-auth-type={type}>
      {formData.email !== undefined && (
        <AuthInput
          id="email"
          label="이메일"
          type="email"
          value={formData.email}
          onChange={(e) =>
            handleInputChange({ field: 'email', value: e.target.value })
          }
          error={errors.email}
          placeholder="이메일을 입력해주세요"
        />
      )}

      {formData.nickname !== undefined && (
        <AuthInput
          id="nickname"
          label="닉네임"
          value={formData.nickname}
          onChange={(e) =>
            handleInputChange({ field: 'nickname', value: e.target.value })
          }
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
          onChange={(e) =>
            handleInputChange({ field: 'password', value: e.target.value })
          }
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
          onChange={(e) =>
            handleInputChange({
              field: 'confirmPassword',
              value: e.target.value,
            })
          }
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

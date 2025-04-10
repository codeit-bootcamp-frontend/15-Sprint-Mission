import AuthFormItem from './AuthFormItem';
import styles from '/src/styles/AuthForm.module.css';
import { useState, useEffect } from 'react';

const AuthForm = ({ formFields, onSubmit, submitButtonText }) => {
  console.log(formFields);
  
  const [formData, setFormData] = useState({});
  const [validStates, setValidStates] = useState({});

  useEffect(() => {
    const initialFormData = {};
    const initialValidStates = {};
    formFields.forEach(field => {
      initialFormData[field.id] = '';
      initialValidStates[field.id] = null;
    });
    setFormData(initialFormData);
    setValidStates(initialValidStates);
  }, [formFields]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleValidStateChange = (id, state) => {
    setValidStates(prev => ({ ...prev, [id]: state }));
  };

  const isFormValid = () => {
    // 모든 필드가 유효한지 확인
    const allFieldsValid = Object.values(validStates).every(state => state === 'isValid');
    
    // 비밀번호 확인 필드가 있는 경우에만 일치 여부 체크
    const hasPasswordCheck = formFields.some(field => field.id === 'passwordCheck');
    if (hasPasswordCheck) {
      return allFieldsValid && formData.password === formData.passwordCheck;
    }
    
    return allFieldsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit?.(formData);
    }
  };

  return (
    <form id='authForm' onSubmit={handleSubmit}>
      <ul className={styles.authFormList}>
        {formFields.map((field) => (
          <AuthFormItem
            key={field.id}
            {...field}
            value={formData[field.id] || ''}
            onChange={handleChange}
            onValidStateChange={handleValidStateChange}
            compareValue={field.id === 'passwordCheck' ? formData.password : undefined}
          />
        ))}
      </ul>
      <button type='submit' className={styles.authBtn} disabled={!isFormValid()}>
        {submitButtonText}
      </button>
    </form>
  );
};

export default AuthForm;

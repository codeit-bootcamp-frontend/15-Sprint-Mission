import { useState } from 'react';

const useAuthForm = (initialFormData, validationRules) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showPasswordStates, setShowPasswordStates] = useState(
    Object.keys(initialFormData).reduce((acc, key) => {
      if (key.toLowerCase().includes('password')) {
        acc[key] = false;
      }
      return acc;
    }, {}),
  );

  const handleInputChange = ({ field, value }) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);

    const fieldError = validationRules[field]?.(value, updatedFormData);
    const newErrors = { ...errors, [field]: fieldError };

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

  const isFormValid = Object.entries(validationRules).every(
    ([field, validateFn]) => !validateFn(formData[field], formData),
  );

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    showPasswordStates,
    setShowPasswordStates,
    isFormValid,
    handleInputChange,
  };
};

export default useAuthForm;

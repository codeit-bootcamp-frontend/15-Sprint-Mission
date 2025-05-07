import { useState } from 'react';

const useAuthForm = (initialFormData, validation) => {
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

    const fieldError = validation[field]?.(value, updatedFormData);
    const newErrors = { ...errors, [field]: fieldError };

    if (
      field === 'password' &&
      updatedFormData.confirmPassword &&
      validation.confirmPassword
    ) {
      newErrors.confirmPassword = validation.confirmPassword(
        updatedFormData.confirmPassword,
        updatedFormData,
      );
    }

    if (field === 'confirmPassword') {
      newErrors.confirmPassword = validation.confirmPassword(
        value,
        updatedFormData,
      );
    }

    setErrors(newErrors);
  };

  const isFormValid = Object.entries(validation).every(
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

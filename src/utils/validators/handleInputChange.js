const handleInputChange = ({
  field,
  value,
  formData,
  setFormData,
  errors,
  setErrors,
  validationRules,
}) => {
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

export default handleInputChange;

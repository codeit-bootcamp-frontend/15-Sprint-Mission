import { useState } from 'react';

const useAddItemForm = (initialFormData, validation) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = ({ field, value }) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);
  };

  const isFormValid = Object.entries(validation).every(([field, validateFn]) =>
    validateFn(formData[field]),
  );

  return {
    formData,
    setFormData,
    isFormValid,
    handleInputChange,
  };
};

export default useAddItemForm;

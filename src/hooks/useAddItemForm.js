import { useState } from 'react';
import { addItemValidation } from '@/utils/validators';

const useAddItemForm = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid = Object.entries(addItemValidation).every(
    ([field, validateFn]) => validateFn(formData[field]),
  );

  return {
    formData,
    setFormData,
    isFormValid,
    handleChange,
  };
};

export default useAddItemForm;

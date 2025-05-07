const addItemValidation = {
  imageFile: (file) => Boolean(file),
  productName: (value) => Boolean(value.trim()),
  description: (value) => Boolean(value.trim()),
  price: (value) => {
    const num = Number(value);
    return Boolean(value) && !isNaN(num);
  },
};

export default addItemValidation;

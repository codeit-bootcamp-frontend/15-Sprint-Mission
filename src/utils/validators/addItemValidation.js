const addItemValidation = {
  imageFile: (file) => Boolean(file),
  productName: (value) => Boolean(value.trim()),
  description: (value) => Boolean(value.trim()),
  price: (value) => {
    const num = Number(value);
    return Boolean(value) && !isNaN(num);
  },
  tags: (arr) => Array.isArray(arr) && arr.length > 0,
};

export default addItemValidation;

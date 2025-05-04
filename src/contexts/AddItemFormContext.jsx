import { createContext, useContext, useState } from 'react';

export const AddItemFormContext = createContext();

export function AddItemFormProvider({ children }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);

  const isFormValid = name && description && price && tags.length > 0;

  return (
    <AddItemFormContext.Provider
      value={{
        name,
        setName,
        description,
        setDescription,
        price,
        setPrice,
        tags,
        setTags,
        isFormValid,
      }}>
      {children}
    </AddItemFormContext.Provider>
  );
}

export const useAddItemForm = () => useContext(AddItemFormContext);

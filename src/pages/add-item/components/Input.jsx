const Input = ({
  type = 'text',
  placeholder = '입력',
  value,
  onChange,
  inputName = '상품',
  name,
}) => {
  return (
    <div className='flex flex-col  mt-8'>
      <h2 className='font-[700] text-[2rem] text-[#1F2937]'>{inputName}</h2>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className='w-full px-3 py-4 text-[2rem] resize-none h-[32.4rem]'
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className='w-full px-3 py-4 text-[2rem] bg-[#f3f3f6]'
        />
      )}
    </div>
  );
};

export default Input;

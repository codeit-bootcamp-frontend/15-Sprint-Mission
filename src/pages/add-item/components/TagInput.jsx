const TagInput = ({
  tagInput,
  handleTagChange,
  handleTagKeyDown,
  tag,
  handleRemoveTag,
}) => {
  return (
    <div className='mb-4'>
      <label className='block font-[700] text-[2rem] text-[#1F2937]'>
        태그
      </label>
      <input
        type='text'
        placeholder='태그를 입력해주세요'
        value={tagInput}
        onChange={handleTagChange}
        onKeyDown={handleTagKeyDown}
        className='w-full px-3 py-4 text-[2rem] bg-[#f3f3f6]'
      />
      <div className='flex flex-wrap gap-2 mt-2'>
        {tag.map((tag, index) => (
          <span
            key={index}
            className='px-2 py-1 font-[400]  text-[#1F2937] rounded-full text-[1.6rem] flex items-center gap-1'
          >
            #{tag}
            <button
              type='button'
              onClick={() => handleRemoveTag(tag)}
              className='text-white text-[1.6rem] ml-1 bg-gray-500 rounded-3xl'
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;

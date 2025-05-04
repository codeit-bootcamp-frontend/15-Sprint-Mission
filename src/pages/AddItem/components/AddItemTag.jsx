import styles from '../styles/AddItemTag.module.css';
import { useState } from 'react';
import { useAddItemForm } from '@/contexts/AddItemFormContext';

export default function AddItemTag() {
  const { tags, setTags } = useAddItemForm();
  const [tag, setTag] = useState('');
  const handleTagChange = (e) => {
    setTag(e.target.value);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 submit 방지
      const newTag = tag.trim(); // 공백 제거
      if (newTag.includes(' ')) {
        alert('태그에는 띄어쓰기가 포함될 수 없습니다.');
        return;
      }
      if (newTag && !tags.includes(newTag)) {
        // 태그 중복, 띄어쓰기 방지
        setTags([...tags, newTag]);
        setTag('');
      }
    }
  };
  const handleTagDelete = (tag) => {
    setTags([...tags].filter((ele) => ele !== tag));
  };

  return (
    <>
      <label htmlFor=''>태그</label>
      <input
        type='text'
        name=''
        id=''
        placeholder='태그를 입력해주세요'
        value={tag}
        onChange={handleTagChange}
        onKeyDown={handleKeyDown}
      />
      <ul className={styles.addItemTagList}>
        {tags.map((tag, index) => (
          <li key={`${tag}-${index}`}>
            <span>&#35;{tag}</span>
            <button type='button' onClick={() => handleTagDelete(tag)}>
              <img src='/public/images/common/ic_tag_x.svg' alt='삭제' />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

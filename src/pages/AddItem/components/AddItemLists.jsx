import styles from '../styles/AddItemLists.module.css';
import AddItemImage from './AddItemImage';
import AddItemTag from './AddItemTag';
import { useState, useRef } from 'react';

export default function AddItemsLists() {
  const [price, setPrice] = useState('');
  const inputRef = useRef(null);

  const handlePriceChange = (e) => {
    const el = inputRef.current;
    const rawValue = e.target.value;
    const cursorPos = el.selectionStart;

    // 쉼표 제거
    const cleanValue = rawValue.replace(/[^0-9]/g, '');
    const numericValue = cleanValue === '' ? 0 : Number(cleanValue);

    // 상태 업데이트
    changePrice(numericValue, rawValue, cursorPos);
  };
  const changePrice = (value, rawValue, prevCursorPos) => {
      setPrice(value === 0 ? '' : value.toLocaleString());
    // 커서 복원
    setTimeout(() => {
      if (!inputRef.current) return;

      // 새 포맷된 문자열
      const formatted = value === 0 ? '' : value.toLocaleString();

      // 이전 값에서 커서까지 몇 개의 숫자가 있었는지 계산
      const numbersBeforeCursor = rawValue.slice(0, prevCursorPos).replace(/[^0-9]/g, '').length;

      // 새 포맷 문자열에서 그 숫자 위치를 다시 찾음
      let newCursorPos = 0;
      let digitsSeen = 0;

      for (let i = 0; i < formatted.length; i++) {
        if (/\d/.test(formatted[i])) digitsSeen++;
        if (digitsSeen === numbersBeforeCursor) {
          newCursorPos = i + 1;
          break;
        }
      }

      inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };


  
  
  return (
    <>
      <li className={styles.addItemListItem}>
        <p>상품 이미지</p>
        <AddItemImage />
      </li>
      <li className={styles.addItemListItem}>
        <label htmlFor='name'>상품명</label>
        <input type='text' name='name' id='name' placeholder='상품명을 입력해주세요' />
      </li>
      <li className={styles.addItemListItem}>
        <label htmlFor='description'>상품 소개</label>
        <textarea name='description' id='description' placeholder='상품 소개를 입력해주세요' />
      </li>
      <li className={styles.addItemListItem}>
        <label htmlFor='price'>판매가격</label>
        <input
          ref={inputRef}
          type='text'
          name='price'
          id='price'
          placeholder='판매 가격을 입력해주세요'
          value={price}
          onChange={handlePriceChange}
        />
      </li>
      <li className={styles.addItemListItem}>
        <AddItemTag />
      </li>
    </>
  );
}


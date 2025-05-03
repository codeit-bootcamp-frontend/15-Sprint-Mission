import styles from '../styles/AddItemsLists.module.css';
import AddItemImage from './AddItemImage';

export default function AddItemsLists() {
  return (
    <>
      <li className={styles.addItemListItem}>
        <p>상품 이미지</p>
        <AddItemImage />
      </li>
      <li className={styles.addItemListItem}>
        <label htmlFor=''>상품명</label>
        <input type='text' name='' id='' placeholder='상품명을 입력해주세요' />
      </li>
      <li className={styles.addItemListItem}>
        <label htmlFor=''>상품 소개</label>
        <textarea name='' id='' placeholder='상품 소개를 입력해주세요' />
      </li>
      <li className={styles.addItemListItem}>
        <label htmlFor=''>판매가격</label>
        <input type='text' name='' id='' placeholder='판매 가격을 입력해주세요' />
      </li>
      <li className={styles.addItemListItem}>
        <label htmlFor=''>태그</label>
        <input type='text' name='' id='' placeholder='태그를 입력해주세요' />
        <ul>
          <li>
            <span>&#35;티셔츠</span>
            <button type='button'>
              <img src='/public/images/common/ic_tag_x.svg' alt='삭제' />
            </button>
          </li>
          <li>
            <span>&#35;티셔츠</span>
            <button type='button'>
              <img src='/public/images/common/ic_tag_x.svg' alt='삭제' />
            </button>
          </li>
        </ul>
      </li>
    </>
  );
}


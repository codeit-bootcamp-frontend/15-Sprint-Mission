import styles from '../styles/AddItemLists.module.css';
import AddItemImage from './AddItemImage';
import AddItemTag from './AddItemTag';

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
        <AddItemTag />
      </li>
    </>
  );
}


import styles from '../styles/AddItemImage.module.css';

export default function AddItemImage() {
  return (
    <div className={styles.addItemImage}>
      <input type='file' name='file' id='file' />
      <label htmlFor='file'>
        <img src='/public/images/common/ic_plus.svg' alt='이미지 등록' />
        이미지 등록
      </label>
    </div>
  );
}

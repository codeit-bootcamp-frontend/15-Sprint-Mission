import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from './styles/index.module.css';
import CommonButton from '@/components/Common/CommonButton';
import '@/styles/items.css';
import AddItemLists from './components/AddItemLists';

export default function AddItem() {
  return (
    <>
      <Header />
      <div id='container' className={`${styles.addItemPage} itemsPage`}>
        <form action='' className='inner04'>
          <div className='contentHeader'>
            <h3>상품 등록하기</h3>
            <CommonButton buttonType={{ buttonType: 'submit', buttonStyle: 'primary', buttonText: '등록' }} disabled />
          </div>
          <ul className={styles.addItemList}>
            <AddItemLists />
          </ul>
        </form>
      </div>
      <Footer />
    </>
  );
}

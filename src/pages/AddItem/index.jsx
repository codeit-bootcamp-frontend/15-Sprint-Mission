import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from './styles/index.module.css';
import CommonButton from '@/components/Common/CommonButton';
import '@/styles/items.css';


export default function AddItem() {

  return (
    <>
      <Header />
      <div id='container' className={`${styles.addItemPage} itemsPage`}>
        <div className='inner04'>
          <section>
            <div className='contentHeader'>
              <h3>상품 등록하기</h3>
              <CommonButton
                buttonType={{ buttonType: 'button', buttonStyle: 'primary', buttonText: '등록' }}
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

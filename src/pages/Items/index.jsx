import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles/index.module.css';

export default function Items() {
  return (
    <>
      <Header />
      <div id='container' className={styles.itemsPage}>
      </div>
      <Footer />
    </>
  );
}

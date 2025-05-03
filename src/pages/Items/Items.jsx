import { AllProductSection, BestProductSection } from '@/components/Product';
import styles from './Items.module.scss';

const Items = () => {
  return (
    <div className={styles.itemsPage}>
      <BestProductSection />
      <AllProductSection />
    </div>
  );
};

export default Items;

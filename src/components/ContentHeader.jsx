import styles from '/src/styles/ContentHeader.module.css';
import SearchInput from './SearchInput';

const ContentHeader = ({title, hasSearch = false, placeholder, buttonType}) => {
  return (
    <div className={styles.contentHeader}>
      <h3>{title}</h3>
      {hasSearch && <SearchInput placeholder={placeholder} buttonType={buttonType} />}
    </div>
  );
};

export default ContentHeader;



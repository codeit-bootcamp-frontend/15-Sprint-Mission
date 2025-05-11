import { useState, useEffect } from 'react';
import { DropdownBtn } from '@/components/common/Buttons';
import sortIcon from '@/assets/icons/sort.svg';
import styles from './SortDrop.module.scss';

const SortDrop = ({ value, onChange, options = [] }) => {
  const [isMobile, setIsMobile] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DropdownBtn
      mode={isMobile ? 'iconMode' : 'textMode'}
      label={selectedOption?.label}
      iconSrc={sortIcon}
      iconAlt="Sort Product List"
      options={options}
      onSelect={onChange}
      buttonClassName={styles.sortButton}
      optionListClassName={styles.optionList}
    />
  );
};

export default SortDrop;

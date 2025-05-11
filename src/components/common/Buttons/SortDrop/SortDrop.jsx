import { useState, useEffect } from 'react';
import { DropdownBtn } from '@/components/common/Buttons';
import sortIcon from '@/assets/icons/sort.svg';

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
      iconSize="md"
      options={options}
      onSelect={onChange}
    />
  );
};

export default SortDrop;

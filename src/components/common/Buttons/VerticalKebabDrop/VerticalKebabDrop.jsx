import { DropdownBtn } from '@/components/common/Buttons';
import kebabIcon from '@/assets/icons/vertical_kebab.svg';
import styles from './VerticalKebabDrop.module.scss';

const VerticalKebabDrop = ({ onSelect }) => {
  const options = [
    { label: '수정하기', value: 'edit' },
    { label: '삭제하기', value: 'delete' },
  ];
  return (
    <DropdownBtn
      mode="iconMode"
      iconSrc={kebabIcon}
      iconAlt="Edit or Delete"
      options={options}
      buttonClassName={styles.kebabButton}
      optionListClassName={styles.optionList}
      onSelect={onSelect}
    />
  );
};

export default VerticalKebabDrop;

import { DropdownBtn } from '@components/common/Buttons';
import kebabIcon from '@/assets/icons/vertical_kebab.svg';

const VerticalKebabDrop = () => {
  const options = [
    { label: '수정하기', value: 'edit' },
    { label: '삭제하기', value: 'delete' },
  ];
  return (
    <DropdownBtn
      mode="iconMode"
      iconSrc={kebabIcon}
      iconAlt="Edit or Delete"
      iconSize="sm"
      options={options}
      onSelect={onChange}
    />
  );
};

export default VerticalKebabDrop;

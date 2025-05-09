import styles from '../styles/ItemDetailInquiry.module.css';
import CommonButton from '@/components/common/CommonButton';
import { useState } from 'react';

export default function ItemDetailInquiry() {
  const [inquiry, setInquiry] = useState('');

  return (
    <form className={styles.itemDetailInquiry}>
      <label htmlFor='inquiry'>문의하기</label>
      <textarea
        id='inquiry'
        placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
        value={inquiry}
        onChange={(e) => setInquiry(e.target.value)}
      />
      <InquiryButton disabled={inquiry.length === 0} />
    </form>
  );
}

const InquiryButton = ({ disabled }) => {
  return <CommonButton buttonType={{ buttonType: 'submit', buttonStyle: 'primary', buttonText: '등록' }} disabled={disabled} />;
};

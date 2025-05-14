import { useLocation } from 'react-router-dom';
import styles from './styles/DetailBackToListButton.module.css';
import { useNavigate } from 'react-router-dom';

export default function DetailBackToListButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handleBackToList = () => {
    const prevQuery = location.state?.prevQuery || '';
    navigate(`/items${prevQuery}`);
  };
  return (
    <button className={styles.backToList} onClick={handleBackToList}>
      목록으로 돌아가기 <img src='/images/common/ic_back.svg' alt='목록으로 돌아가기' />
    </button>
  );
}

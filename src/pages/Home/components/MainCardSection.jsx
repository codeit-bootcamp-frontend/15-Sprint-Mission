import styles from '../styles/MainCardSection.module.css';
import { useNavigate } from 'react-router-dom';

const MainCardSection = ({cate, title, contents}) => {
  const navigate = useNavigate();
  return (
    <section className={`${styles.mainCardSection}`}>
      <div className='inner'>
        <button onClick={() => navigate(`/${cate}`)}>
          <div className={styles.mainCardSectionImg}>
            <img src={`/images/main/main_${cate}.png`} alt='상품 검색 이미지' />
          </div>
          <div>
            <h2>{cate}</h2>
            <b>{title}</b>
            <p>{contents}</p>
          </div>
        </button>
      </div>
    </section>
  );
}

export default MainCardSection;

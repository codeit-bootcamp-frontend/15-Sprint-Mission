import styles from '../styles/MainBanner.module.css';
import { useNavigate } from 'react-router-dom';

const MainBanner = ({ text, bgImg, hasButton = false}) => {
  const navigate = useNavigate();
  return (    
    <section className={styles.mainBanner}>
      <div className='inner02' style={{ backgroundImage: `url(${bgImg})` }}>
        <div className={styles.mainBannerCont}>
          <strong>
            {text}
          </strong>
          {hasButton && <button onClick={() => navigate('/items')}>구경하러 가기</button>}
        </div>
      </div>
    </section>
  );
};

export default MainBanner;



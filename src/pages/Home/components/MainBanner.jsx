import styles from '../styles/MainBanner.module.css';
import { useNavigate } from 'react-router-dom';

const MainBanner = ({ bannerNum }) => {
  const navigate = useNavigate();
  return (
    <section className={`${styles.mainBanner} ${styles[`mainBanner0${bannerNum}`]}`}>
      <div className='inner02'>
        <div className={styles.mainBannerCont}>
          <strong>
            {bannerNum === 1 ? (
              <>
                일상의 모든 물건을
                <br className='pc-only' />
                거래해 보세요
              </>
            ) : (
              <>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </>
            )}
          </strong>
          {bannerNum === 1 && <button onClick={() => navigate('/items')}>구경하러 가기</button>}
        </div>
      </div>
    </section>
  );
};

export default MainBanner;



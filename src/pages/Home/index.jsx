import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainBanner from './components/MainBanner';
import MainCardSection from './components/MainCardSection';
import { CATEGORY_LIST } from './config';
import styles from './styles/index.module.css';
import MainBannerTopBG from '/images/main/Img_home_top.png';
import MainBannerBottomBG from '/images/main/Img_home_bottom.png';

export default function Home() {
  return (
    <>
      <Header />
      <div id='container' className={styles.mainPage}>
        <MainBanner
          text={
            <>
              일상의 모든 물건을
              <br className='pc-only' />
              거래해 보세요
            </>
          }
          bgImg={MainBannerTopBG}
          hasButton
          index={0}
        />
        {CATEGORY_LIST.map((cate) => (
          <MainCardSection key={cate.id} cate={cate.id} title={cate.title} contents={cate.contents} />
        ))}
        <MainBanner
          text={
            <>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </>
          }
          bgImg={MainBannerBottomBG}
          index={1}
        />
      </div>
      <Footer />
    </>
  );
}

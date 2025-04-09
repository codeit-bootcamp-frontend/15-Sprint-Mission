import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainBanner from './components/MainBanner';
import MainCardSection from './components/MainCardSection';
import styles from './styles/index.module.css';

export default function Home() {
  const categories = [
    {
      id: 'hot',
      title: (
        <>
          인기 상품을
          <br className='pc-only' />
          확인해 보세요
        </>
      ),
      contents: (
        <>
          가장 HOT한 중고거래 물품을
          <br />
          판다 마켓에서 확인해 보세요
        </>
      ),
    },
    {
      id: 'search',
      title: (
        <>
          구매를 원하는
          <br className='pc-only' />
          상품을 검색하세요
        </>
      ),
      contents: (
        <>
          구매하고 싶은 물품은 검색해서
          <br />
          쉽게 찾아보세요
        </>
      ),
    },
    {
      id: 'register',
      title: (
        <>
          판매를 원하는
          <br className='pc-only' />
          상품을 등록하세요
        </>
      ),
      contents: (
        <>
          어떤 물건이든 판매하고 싶은 상품을
          <br />
          쉽게 등록하세요
        </>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div id='container' className={styles.mainPage}>
        <MainBanner bannerNum={1} />
        {categories.map((cate) => (
          <MainCardSection key={cate.id} cate={cate.id} title={cate.title} contents={cate.contents} />
        ))}
        <MainBanner bannerNum={2} />
      </div>
      <Footer />
    </div>
  );
}

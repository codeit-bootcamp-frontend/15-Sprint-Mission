import { Banner, Card } from '@/components/Landing';
import { ROUTES } from '@/constants/urls';
import home01 from '@/assets/images/home_01.svg';
import home02 from '@/assets/images/home_02.svg';
import home03 from '@/assets/images/home_03.svg';
import homeTop from '@/assets/images/home_top.svg';
import homeBottom from '@/assets/images/home_bottom.svg';
import styles from './Landing.module.scss';
import textStyles from '@/styles/helpers/textHelpers.module.scss';

export default function Landing() {
  const cardList = [
    {
      id: 1,
      imgSrc: home01,
      alt: 'Two pandas looking at a green shirt',
      badge: 'Hot item',
      title: (
        <>
          인기 상품을{' '}
          <span className={textStyles.changeLine}>확인해 보세요</span>
        </>
      ),
      description: (
        <>
          가장 HOT한 중고거래 물품을
          <br /> 판다 마켓에서 확인해 보세요
        </>
      ),
    },
    {
      id: 2,
      imgSrc: home02,
      alt: 'Searching a product to buy',
      badge: 'Search',
      title: (
        <>
          구매를 원하는{' '}
          <span className={textStyles.changeLine}>상품을 검색하세요</span>
        </>
      ),
      description: (
        <>
          구매하고 싶은 물품은 검색해서
          <br /> 쉽게 찾아보세요
        </>
      ),
      reverse: true,
    },
    {
      id: 3,
      imgSrc: home03,
      alt: 'Upload a product to sell',
      badge: 'Register',
      title: (
        <>
          판매를 원하는{' '}
          <span className={textStyles.changeLine}>상품을 등록하세요</span>
        </>
      ),
      description: (
        <>
          어떤 물건이든 판매하고 싶은 상품을
          <br /> 쉽게 등록하세요
        </>
      ),
    },
  ];

  return (
    <>
      <Banner
        title={
          <>
            일상의 모든 물건을{' '}
            <span
              className={`${textStyles.changeLine} ${textStyles.mobileLine}`}
            >
              거래해 보세요
            </span>
          </>
        }
        imgSrc={homeTop}
        alt="A panda mascot waving its hand"
        buttonText="구경하러 가기"
        buttonLink={ROUTES.ITEMS}
      />

      <section className={styles.cards}>
        {cardList.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>

      <Banner
        title={
          <>
            믿을 수 있는
            <br /> 판다마켓 중고 거래
          </>
        }
        imgSrc={homeBottom}
        alt="Two pandas trading products"
        isBottom={true}
      />
    </>
  );
}

import Header from "../../components/Header";
import TopBanner from "./components/TopBanner/TopBanner";
import MainContent from "./components/MainContent/MainContent";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import Footer from "./components/Footer/Footer";
import "./Home.css";
import img1 from "../../assets/images/img_home_01.svg";
import img2 from "../../assets/images/img_home_02.svg";
import img3 from "../../assets/images/img_home_03.svg";

const Home = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <div className="main-contents">
        <MainContent
          img={img1}
          category="Hot Item"
          header="인기 상품을 <br/>확인해 보세요"
          content="가장 Hot한 중고거래 물품을 <br/>판다 마켓에서 확인해 보세요"
        />
        <MainContent
          img={img2}
          category="Search"
          header="구매를 원하는 <br/>상품을 검색하세요"
          content="구매하고 싶은 물품은 검색해서 <br/>쉽게 찾아보세요"
        />
        <MainContent
          img={img3}
          category="Register"
          header="판매를 원하는 <br/>상품을 등록하세요"
          content="어떤 물건이든 판매하고 싶은 상품을 <br/>쉽게 등록하세요"
        />
      </div>
      <BottomBanner />
      <Footer />
    </>
  );
};

export default Home;

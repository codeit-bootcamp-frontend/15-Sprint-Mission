import { Link } from "react-router-dom";
import MainSection from "../components/mainSection";
import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logo_text.svg";
import topImg from "../assets/images/home_top.svg";
import bottomImg from "../assets/images/home_bottom.svg";
import img1 from "../assets/images/home_01.svg";
import img2 from "../assets/images/home_02.svg";
import img3 from "../assets/images/home_03.svg";

function MainPage() {
  return (
    <div>
      <div className="w-full bg-white sticky top-0">
        <div className="max-w-1120 py-10 px-16 flex items-center justify-between tablet:px-24 m-auto">
          <div className="py-8 flex-1 tablet:py-0">
            <img className="w-153 hidden tablet:block" src={logo} />
            <img className="w-103 block tablet:hidden" src={logoText} />
          </div>
          <button>로그인</button>
        </div>
      </div>
      <div className="bg-[#cfe5ff] flex items-end">
        <div className="mx-auto flex flex-col items-center gap-132 tablet:gap-212 pc:gap-8 pc:flex-row pc:pt-200">
          <div className="flex flex-col gap-18 tablet:gap-24 pc:gap-32 pt-48 tablet:pt-84 pc:pt-0">
            <h2 className="text-center text-3xl font-bold text-gray700 pc:text-left">
              일상의 모든 물건을 <br className="block tablet:hidden pc:block" />
              거래해보세요
            </h2>
            <Link to="/items">
              <button>구경하러 가기</button>
            </Link>
          </div>
          <div>
            <img className="h-172 tablet:h-340" src={topImg} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-40 py-52 tablet:gap-52 pc:gap-138 pc:py-138">
        <MainSection
          img={img1}
          badge="Hot Item"
          title={
            <>
              인기 상품을 <br className="hidden pc:block" /> 확인해 보세요
            </>
          }
          description={
            <>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </>
          }
        />
        <MainSection
          position="reverse"
          img={img2}
          badge="Search"
          title={
            <>
              구매를 원하는 <br className="hidden pc:block" /> 상품을 검색하세요
            </>
          }
          description={
            <>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </>
          }
        />
        <MainSection
          img={img3}
          badge="Register"
          title={
            <>
              판매를 원하는 <br className="hidden pc:block" /> 상품을 등록하세요
            </>
          }
          description={
            <>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </>
          }
        />
      </div>
      <div className="bg-[#cfe5ff] flex items-end">
        <div className="mx-auto flex flex-col items-center gap-132 tablet:gap-212 pc:gap-8 pc:flex-row pc:pt-144">
          <h2 className="text-center text-3xl font-bold text-gray700 pc:text-left pt-120 tablet:pt-160 pc:pt-0">
            믿을 수 있는 <br className="block tablet:hidden pc:block" />
            판다마켓 중고거래
          </h2>
          <div>
            <img className="h-172 tablet:h-340" src={bottomImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

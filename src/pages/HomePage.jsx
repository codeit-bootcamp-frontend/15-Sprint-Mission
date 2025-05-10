import EmptyMarket from "../img/emptyMarket.png";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center ">
      <img src={EmptyMarket} alt="fixPage Panda" className="size-300" />
      <p className="text-gray-700 text-xl">
        페이지 준비 중입니다. 조금만 기다려주세요!
      </p>
    </div>
  );
};

export default HomePage;

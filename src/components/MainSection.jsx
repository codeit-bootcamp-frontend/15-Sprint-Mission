function MainSection({ position, img, badge, title, description }) {
  const isReverse = position === "reverse";

  return (
    <>
      <div className="px-15 m-auto">
        <div
          className={`flex flex-col gap-24 pc:flex-row bg-[#fcfcfc] rounded-xl pc:w-988 pc:gap-52 ${isReverse ? "pc:flex-row-reverse" : ""}`}
        >
          <img className="w-344 tablet:w-696 pc:w-579" src={img} />
          <div
            className={`flex flex-col gap-16 tablet:gap-24 justify-center ${isReverse ? "text-right" : ""}`}
          >
            <div className="flex flex-col gap-8 tablet:gap-16">
              <p className="text-lg text-blue100 font-bold tablet:text-2lg">
                {badge}
              </p>
              <h2 className="text-2xl text-gray700 font-bold tablet:text-3xl">
                {title}
              </h2>
            </div>
            <p className="text-lg text-gray700 font-medium tablet:text-2lg pc:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainSection;

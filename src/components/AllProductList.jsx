import HeartIcon from "../assets/icons/icon_heart";
import noImage from "../assets/no-image.png";

export default function AllProductList({ data = [] }) {
  if (!data.length) return null;

  const display = {
    mobile: 4,
    tablet: 6,
    desktop: 10,
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 w-full mt-10 text-[1.6rem] text-[#1F2937]">
      {data.map((item, index) => {
        let hiddenClass = "";

        if (index >= display.mobile) hiddenClass += " max-md:hidden";
        if (index >= display.tablet) hiddenClass += " md:max-xl:hidden";
        if (index >= display.desktop) hiddenClass += " xl:hidden";

        return (
          <div
            key={item.id}
            className={`flex flex-col gap-2 w-full h-full ${hiddenClass}`}
          >
            <img
              className="md:w-full h-full rounded-2xl aspect-[1/1] overflow-hidden"
              src={item.images || noImage}
              alt={item.name || "이미지 없음"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = noImage;
              }}
            />
            <p className="text-[1.4rem] text-[#1F2937]">{item.name}</p>
            <p className="font-[700]">{item.price.toLocaleString()}원</p>
            <p className="flex text-[#4B5563] items-center gap-3">
              <HeartIcon />
              {item.favoriteCount}
            </p>
          </div>
        );
      })}
    </div>
  );
}

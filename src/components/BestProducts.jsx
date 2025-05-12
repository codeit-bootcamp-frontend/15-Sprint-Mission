import HeartIcon from "../assets/icons/icon_heart";
import ProductList from "./AllProductList";

export default function BestProductList({ data = [] }) {
  const display = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const filteredData = data.map((item, index) => {
    let hiddenClass = "";

    if (index >= display.mobile) {
      hiddenClass += " max-md:hidden";
    }
    if (index >= display.tablet) {
      hiddenClass += " md:max-xl:hidden";
    }
    if (index >= display.desktop) {
      hiddenClass += " xl:hidden";
    }

    return { ...item, hiddenClass };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full mt-10 text-[1.6rem] text-[#1F2937]">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col gap-2 w-full ${item.hiddenClass}`}
        >
          <img className="md:w-full h-full rounded-2xl" src={item.images} />
          <p className="text-[1.4rem] text-[#1F2937]">{item.name}</p>
          <p className="font-[700]">{item.price.toLocaleString()}원</p>
          <p className="flex text-[#4B5563] items-center gap-3">
            <HeartIcon />
            {item.favoriteCount}
          </p>
        </div>
      ))}
    </div>
  );
}

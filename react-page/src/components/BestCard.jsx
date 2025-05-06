const BestCard = ({ item }) => {
  return (
    <div className='rounded-md p-2  transition w-[34.3rem] h-[43.4rem] lg:h-[37.8rem] lg:w-[28.2rem]'>
      <img
        src={item.images[0]}
        alt={item.name}
        className='w-full lg:h-[28.2rem] h-[34.3rem] object-cover rounded'
      />
      <div className='mt-[1.6rem] flex flex-col gap-3'>
        <div className='text-[1.4rem] text-gray-500 '>{item.name}</div>
        <div className='font-bold text-[1.6rem]'>
          {item.price.toLocaleString()}원
        </div>
        <div className='text-2xl text-gray-400'>❤️ {item.favoriteCount}</div>
      </div>
    </div>
  );
};

export default BestCard;

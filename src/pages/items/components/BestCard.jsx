const BestCard = ({ item }) => {
  return (
    <div className='rounded-md p-2 transition flex flex-col h-full'>
      <div className='aspect-square w-full overflow-hidden rounded'>
        <img
          src={item.images[0]}
          alt={item.name}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='mt-[1.6rem] flex flex-col gap-3'>
        <div className='text-[1.4rem] text-[#1F2937] font-[500]  '>
          {item.name}
        </div>
        <div className='font-bold text-[1.6rem]'>
          {item.price.toLocaleString()}원
        </div>
        <div className='text-2xl text-gray-400'>❤️ {item.favoriteCount}</div>
      </div>
    </div>
  );
};

export default BestCard;

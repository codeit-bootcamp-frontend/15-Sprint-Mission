const ItemCard = ({ item }) => {
  return (
    <div className='rounded-md p-2 transition h-[26.4.7rem] w-[16.8rem] md:w-[22.1rem] md:h-[31.7rem] flex flex-col '>
      <img
        src={item.images[0]}
        alt={item.name}
        className='w-full h-[16.8rem] md:h-[31.7rem] object-cover rounded'
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

export default ItemCard;

const ItemCard = ({ item }) => {
  return (
    <div className='rounded-md p-2 hover:shadow-md transition'>
      <img
        src={item.images[0]}
        alt={item.name}
        className='w-full h-40 object-cover rounded'
      />
      <div className='mt-[1.6rem] flex flex-col gap-3'>
        <div className='text-sm text-gray-500 '>{item.name}</div>
        <div className='font-bold'>{item.price.toLocaleString()}원</div>
        <div className='text-xs text-gray-400'>❤️ {item.likes}</div>
      </div>
    </div>
  );
};

export default ItemCard;

import { IoIosMore } from 'react-icons/io';

const TrendingItem = () => {
  return (
    <a href="#" className="flex hover:bg-white/10 p-4 justify-between">
      <div>
        <p className="text-xs text-white/50">Trending in Indonesia</p>
        <p className="text-base font-bold">Malming</p>
        <p className="text-xs text-white/50">13.4K posts</p>
      </div>
      <div>
        <IoIosMore size={15} />
      </div>
    </a>
  );
};
2;

export default TrendingItem;

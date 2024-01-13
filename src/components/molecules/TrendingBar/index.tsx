import { IoIosSearch } from 'react-icons/io';
import Button from '../../atoms/Button';
import TrendingItem from '../../atoms/TrendingItem';

const TrendingBar = () => {
  return (
    <div className="border-l-[0.1px] me-24 col-span-4 h-screen   border-white/25 pt-2 ps-10">
      <div className="relative">
        <IoIosSearch className="absolute top-3 left-3" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-transparent focus:border-blue-500 outline-none text-base py-2 ps-10 rounded-full bg-white/10"
        />
      </div>
      <div className="bg-white/10 mt-5 py-3 px-4 rounded-xl">
        <p className="text-xl font-bold">Subscribe to Premium</p>
        <p className="text-sm mt-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <Button label="Subscribe" />
      </div>
      <div className="bg-white/10 my-5  rounded-xl">
        <p className="text-xl font-bold pt-4 px-5">Trends for you </p>
        <div className="my-3">
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
        </div>
      </div>
    </div>
  );
};

export default TrendingBar;

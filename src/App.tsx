import { GoHomeFill, GoSearch } from 'react-icons/go';
import MainContent from './components/molecules/MainContent';
import Sidebar from './components/molecules/Sidebar';
import TrendingBar from './components/molecules/TrendingBar';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineEnvelope } from 'react-icons/hi2';

export default function App() {
  return (
    <>
      <div className="grid grid-cols-12 hide-scroll text-3xl max-h-screen overflow-y-scroll text-white">
        <Sidebar />
        <MainContent />
        <TrendingBar />
      </div>
      <div className="bg-black sm:hidden border-t-[0.1px] border-b border-white/25 py-3 text-white justify-around flex text-xl fixed bottom-0 w-full">
        <a href="#" className="relative ">
          <GoHomeFill size={30} />
          <div className="w-2 h-2 absolute top-0 right-1 bg-twitter rounded-full"></div>
        </a>
        <a href="#">
          <GoSearch size={30} />
        </a>
        <a href="#" className="relative">
          <IoMdNotificationsOutline size={30} />
          <div className="bg-twitter absolute top-0 right-0 flex items-center justify-center rounded-full text-[10px] w-4 h-4">
            1
          </div>
        </a>
        <a href="#">
          <HiOutlineEnvelope size={30} />
        </a>
      </div>
    </>
  );
}
354;

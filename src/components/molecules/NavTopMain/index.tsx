import NavbarTab from '../../atoms/NavbarTab';
import { IoSettingsOutline } from 'react-icons/io5';

const NavMain = () => {
  return (
    <div className="border-b-[0.1px] flex justify-between text-base border-white/25">
      <div className="grid grid-cols-2 w-full">
        <NavbarTab label="For You" isActive />
        <NavbarTab label="Following" />
      </div>
      <span className="px-5 hover:bg-white/10 cursor-pointer hidden sm:flex items-center justify-center">
        <IoSettingsOutline size={18} />
      </span>
    </div>
  );
};

export default NavMain;

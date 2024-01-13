import { IoIosMore, IoMdNotificationsOutline } from 'react-icons/io';
import SidebarItem from '../../atoms/SidebarItem';
import { GoHomeFill, GoSearch } from 'react-icons/go';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CgMoreO, CgNotes } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { FaRegUser, FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';
import { MdVerified } from 'react-icons/md';

const dataSidebar = [
  {
    icon: <GoHomeFill size={30} />,
    label: 'Home',
  },
  {
    icon: <GoSearch size={30} />,
    label: 'Explore',
  },
  {
    icon: <IoMdNotificationsOutline size={30} />,
    label: 'Notification',
  },
  {
    icon: <HiOutlineEnvelope size={30} />,
    label: 'Messages',
  },
  {
    icon: <CgNotes size={30} />,
    label: 'List',
  },
  {
    icon: <FiUsers size={30} />,
    label: 'Communities',
  },
  {
    icon: <FaXTwitter size={30} />,
    label: 'Premium',
  },
  {
    icon: <FaRegUser size={30} />,
    label: 'Profile',
  },
  {
    icon: <CgMoreO size={30} />,
    label: 'More',
  },
];
const Sidebar = () => {
  const [openOption, setOpenOption] = useState(false);
  const handleOpenOption = () => {
    setOpenOption(!openOption);
  };
  return (
    <div className="col-span-3 border-r-[0.1px] h-screen  overflow-y border-white/25 ps-[25%] py-1">
      <div className="flex flex-col h-full justify-between relative">
        <div>
          <div className="bg-white/10 w-fit flex">
            <img
              src="/assets/images/logo-x.jpg"
              alt="logo-x"
              className="w-16 object-cover"
            />
          </div>
          <div className="flex flex-col">
            {dataSidebar.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>
          <div className="my-3 me-5">
            <button className="bg-twitter w-full rounded-full text-[20px] py-2">
              Post
            </button>
          </div>
        </div>
        {/* BUTTON PROFILE */}
        {/* CSS Tooltip */}
        {openOption && (
          <>
            <div className="bg-black z-10 shadow-custom w-full absolute bottom-20 rounded-xl">
              <div className="text-base py-3 font-semibold z-50">
                <button className="hover:bg-white/10 w-full py-2 text-start ps-5">
                  Add an existing account
                </button>
                <button className="hover:bg-white/10 w-full py-2 text-start ps-5">
                  Logout @username
                </button>
              </div>
            </div>
            <div className="bg-black shadow-custom absolute bottom-[80px] w-10 h-10  left-1/2 transform -translate-x-1/2 rotate-45"></div>
          </>
        )}
        <div
          onClick={handleOpenOption}
          className="flex justify-between items-center hover:bg-white/10 me-5 p-3 rounded-full hover:cursor-pointer"
        >
          <div className="flex items-center">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="profile"
                className="w-10 h-10 rounded-full border"
              />
            </div>
            <div className="text-xs ms-3  flex flex-col">
              <p className="font-bold flex items-center gap-1">
                Agus Dwi Milniadi <MdVerified color="#1DA1F2" />
              </p>
              <p className="font-medium text-zinc-500">@agusdwimilniadi</p>
            </div>
          </div>
          <div className="me-5">
            <IoIosMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

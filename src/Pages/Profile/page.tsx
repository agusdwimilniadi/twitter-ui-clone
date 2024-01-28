import { IoMdArrowBack } from 'react-icons/io';
import LayoutHome from '../layout';
import Button from '../../components/atoms/Button';
import { FaRegCalendarAlt } from 'react-icons/fa';
import NavTab from './NavTab';

const Profile = () => {
  return (
    <LayoutHome>
      <>
        <div className="flex backdrop-blur-lg items-center  sticky top-0 z-50">
          <div className="px-7 flex items-center justify-center  ">
            <IoMdArrowBack size={18} />
          </div>
          <div className="py-1">
            <h1 className="text-xl font-bold">suga</h1>
            <p className="text-sm text-white/50">10 posts</p>
          </div>
        </div>
        <div>
          <img
            src="https://disk.mediaindonesia.com/files/news/2022/12/30/WhatsApp%20Image%202022-12-22%20at%2017.06.59.jpg"
            alt="img-sampul"
            className="w-full h-[13rem] object-cover"
          />
        </div>
        <div
          className="-mt-20 relative flex items-end justify-between mx-3
        "
        >
          <div className="w-fit border-4 rounded-full border-black">
            <img
              src="/assets/profile/code-cepti.jpeg"
              alt="profile"
              className="rounded-full w-36 h-w-36 border-white"
            />
          </div>
          <Button
            variant="tertiary"
            className="absolute right-0 top-24"
            label="Edit Profile"
          />
        </div>
        <div className=" px-4 mb-3 flex flex-col gap-0 ">
          <div>
            <p className="text-xl font-semibold">Code || Cepti</p>
            <p className="text-base text-white/50 font-light">@codecepti</p>
          </div>
          <p className="text-[15px] flex flex-col ">
            ig:cepti_157_well
            <a href="#" className=" text-twitter hover:underline">
              Translate bio
            </a>
          </p>
          <div className="flex items-center gap-2 text-white/50">
            <FaRegCalendarAlt size={15} />
            <p className="text-[15px]"> Joined May 2022</p>
          </div>
          <div className="text-[15px] flex gap-3">
            <p className="font-normal text-white/50">
              <span className="font-semibold text-white">12</span> Following
            </p>
            <p className="font-normal text-white/50">
              <span className="font-semibold text-white">12.4k</span> Followers
            </p>
          </div>
        </div>
        <NavTab />
      </>
    </LayoutHome>
  );
};

export default Profile;

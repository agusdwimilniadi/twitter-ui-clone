import { AiOutlineRetweet } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { GoShare } from 'react-icons/go';
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import { IoIosStats } from 'react-icons/io';
import { LuHeart } from 'react-icons/lu';
import { MdVerified } from 'react-icons/md';

const Content = () => {
  return (
    <div className="border-t-[0.1px] border-b border-white/25">
      <div className="flex my-2 gap-1">
        <div className="mx-3 my-2">
          <img
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5219609524c6731e93b5c40ced1e0b0d~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=5s7vV8eXz5LVImYzpghTyDdGY0U%3D"
            alt="img-profile"
            className="w-16 rounded-full object-cover"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
            }}
          />
        </div>
        <div className="text-base flex flex-col ">
          <div className="flex items-center gap-1">
            <p className="font-semibold">tyar</p>
            <MdVerified color="#1DA1F2" />
            <p className="text-white/50">@bachtyarrr · 16h</p>
          </div>
          <p>apakah ada yang mau jadi cewe ku guys disini?</p>
          <div className="my-2 me-5">
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
              }}
              src="https://www.telkomsel.com/sites/default/files/2023-03/ilustrasi%20artikel%20september%20week%203-106.png"
              alt="post-image"
              className="rounded-xl max-h-[30rem] max-w-full object-contain "
            />
          </div>
          <div className="flex justify-between mt-2">
            <button className="flex items-center gap-1 text-sm text-white/50 hover:text-twitter transition-all">
              <HiOutlineChatBubbleOvalLeft size={18} />
              29
            </button>
            <button className="flex items-center gap-1 text-sm text-white/50 hover:text-green-500 transition-all">
              <AiOutlineRetweet size={18} />
              12
            </button>
            <button className="flex items-center gap-1 text-sm text-white/50 hover:text-red-500 transition-all">
              <LuHeart size={18} />
              1.123
            </button>
            <button className="flex items-center gap-1 text-sm text-white/50 hover:text-twitter transition-all me-5">
              <IoIosStats size={18} />
              1.323
            </button>
            <div className="text-white/50 flex items-center gap-3 me-5">
              <button>
                <CiBookmark size={18} className="hover:text-blue-500" />
              </button>
              <button>
                <GoShare size={18} className="hover:text-green-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

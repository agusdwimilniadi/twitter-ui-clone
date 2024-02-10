import { AiOutlineRetweet } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { GoShare } from 'react-icons/go';
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import { IoIosStats } from 'react-icons/io';
import { LuHeart } from 'react-icons/lu';
import { MdVerified } from 'react-icons/md';

const Content = ({ isComment }: { isComment?: boolean }) => {
  return (
    <div className="border-t-[0.1px] border-b border-white/25">
      <div className="flex my-2 gap-1 ">
        <div className="mx-3 my-2 flex  flex-col items-center">
          <img
            src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="img-profile"
            className=" h-10 rounded-full object-cover"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
            }}
          />
          {isComment ? (
            <div className="w-[2px] h-full bg-white/30 my-2"></div>
          ) : null}
        </div>
        <div className="text-base flex grow flex-col ">
          <div className="flex items-center gap-1">
            <p className="font-semibold">tyar</p>
            <MdVerified color="#1DA1F2" />
            <p className="text-white/50">@bachtyarrr · 16h</p>
          </div>
          <p>BARCELONA KALAH DI TANGGAL 2-8 Januari 2024</p>
          <div className="my-2 me-5">
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
              }}
              src="https://pbs.twimg.com/media/GE358rFakAAT-ej?format=jpg&name=medium"
              alt="post-image"
              className="rounded-xl max-h-[30rem] max-w-full object-contain "
            />
          </div>
          <div className="grid grid-cols-5 justify-between mt-2">
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
            <div className="text-white/50 flex items-end justify-end gap-3 me-5">
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

      {/* INI KOMENTAR ANJERRR */}
      <div className="flex my-2 gap-1 w-full">
        <div className="mx-3 my-2 flex ">
          <img
            src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="img-profile"
            className="h-10 rounded-full object-cover"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
            }}
          />
        </div>
        <div className="text-base flex grow flex-col w-full ">
          <div className="flex items-center gap-1">
            <p className="font-semibold">tyar</p>
            <MdVerified color="#1DA1F2" />
            <p className="text-white/50">@bachtyarrr · 16h</p>
          </div>
          <p>BARCELONA KALAH DI TANGGAL 2-8 Januari 2024 Lorem40</p>
          <div className="grid grid-cols-5 justify-between mt-2">
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
            <div className="text-white/50 flex items-end justify-end gap-3 me-5">
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

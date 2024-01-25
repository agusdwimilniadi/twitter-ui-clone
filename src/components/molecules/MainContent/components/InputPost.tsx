import { BiWorld } from 'react-icons/bi';
import Button from '../../../atoms/Button';
import { GoImage } from 'react-icons/go';
import { HiOutlineGif } from 'react-icons/hi2';
import { CgOptions } from 'react-icons/cg';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

const InputPost = () => {
  return (
    <div className="flex m-4 gap-3">
      <div>
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7e4f5034b03564bc11e15af58d9bdb5a~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705669200&x-signature=t757%2F9adxmru%2FUJ0uOxMOQMKJEs%3D"
          alt="img-profile"
          className="w-12  rounded-full"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
          }}
        />
      </div>
      <div className="w-full relative">
        <div>
          <input
            className="w-full text-xl border border-transparent outline-none bg-transparent placeholder:text-xl placeholder:text-white/50  "
            type="text"
            placeholder="What is happening?!"
          />
          <button className="text-twitter flex text-sm my-3 items-center gap-1 o">
            <BiWorld />
            <p className="font-semibold">Everyone can reply</p>
          </button>
          <hr className="border-white/25 h-px" />
          <div className="flex justify-between items-center my-3">
            <div className="text-twitter flex gap-3">
              <GoImage size={20} />
              <HiOutlineGif size={20} />
              <CgOptions size={20} />
              <MdOutlineEmojiEmotions size={20} />
            </div>
            <div>
              <Button label="Post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPost;

import { MdVerified } from 'react-icons/md';
import Button from '../Button';
import { IWhoToFollow } from '../../../constant/data';

const AccountItem = ({
  id,
  image,
  name,
  username,
  isVerified,
}: IWhoToFollow) => {
  return (
    <a
      href={`${id}`}
      className="hover:bg-white/30  py-3 flex gap-3 items-center justify-between px-5"
    >
      <div className="flex items-center gap-2 ">
        <div className="w-12">
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
            }}
            src={image}
            alt="logo-account"
            className=" object-cover rounded-full"
          />
        </div>
        <div className="text-sm">
          <div className="flex gap-2 items-center">
            <p className="font-semibold  line-clamp-1 hover:underline">
              {name}
            </p>
            {isVerified ? <MdVerified color="#1DA1F2" size={15} /> : null}
          </div>
          <p className="font-normal text-white/50 line-clamp-1">{username}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Button variant="secondary" label="Follow" />
      </div>
    </a>
  );
};

export default AccountItem;

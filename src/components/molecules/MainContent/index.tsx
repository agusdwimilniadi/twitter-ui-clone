import { RiTwitterXLine } from 'react-icons/ri';
import NavMain from '../NavTopMain';
import Content from './components/Content';
import InputPost from './components/InputPost';
import { IoSettingsOutline } from 'react-icons/io5';

const MainContent = () => {
  return (
    <div>
      <div className="h-full ">
        <div>
          <div className="flex sm:hidden items-center justify-between p-3">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="profile"
                className="w-10 h-10 rounded-full border"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg';
                }}
              />
            </div>
            <div>
              <RiTwitterXLine size={20} />
            </div>
            <div>
              <IoSettingsOutline size={30} />
            </div>
          </div>
          <NavMain />
          <InputPost />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

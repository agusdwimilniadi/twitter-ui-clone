import { useState } from 'react';
import NavTabItem from '../../components/atoms/NavTabItem';
import Post from './Post';
import Replies from './Replies';
import Highlights from './Highlights';
import Media from './Media';
import Likes from './Likes';

type ActiveVariant = 'Posts' | 'Replies' | 'Highlights' | 'Media' | 'Likes';
const NavTab = () => {
  const [activeItems, setActiveItems] = useState<ActiveVariant>('Posts');
  return (
    <div>
      <div className="flex justify-around">
        <NavTabItem
          isActive={activeItems === 'Posts'}
          label="Posts"
          onClick={() => setActiveItems('Posts')}
        />
        <NavTabItem
          isActive={activeItems === 'Replies'}
          onClick={() => setActiveItems('Replies')}
          label="Replies"
        />
        <NavTabItem
          isActive={activeItems === 'Highlights'}
          onClick={() => setActiveItems('Highlights')}
          label="Highlights"
        />
        <NavTabItem
          isActive={activeItems === 'Media'}
          onClick={() => setActiveItems('Media')}
          label="Media"
        />
        <NavTabItem
          isActive={activeItems === 'Likes'}
          onClick={() => setActiveItems('Likes')}
          label="Likes"
        />
      </div>
      <div className="my-5">
        {activeItems === 'Posts' ? <Post /> : null}
        {activeItems === 'Replies' ? <Replies /> : null}
        {activeItems === 'Highlights' ? <Highlights /> : null}
        {activeItems === 'Media' ? <Media /> : null}
        {activeItems === 'Likes' ? <Likes /> : null}
      </div>
    </div>
  );
};

export default NavTab;

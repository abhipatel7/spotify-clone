import type { FC } from 'react';
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';

const sideBarButtons = [
  { Icon: HomeIcon, name: 'Home' },
  { Icon: SearchIcon, name: 'Search' },
  { Icon: LibraryIcon, name: 'Your Library' },
  { Icon: PlusCircleIcon, name: 'Create Playlist' },
  { Icon: HeartIcon, name: 'Liked Songs' },
  { Icon: RssIcon, name: 'Your Episodes' },
];

const Sidebar: FC = () => {
  const { data: session, status } = useSession();

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>Logout</p>
        </button>
        {sideBarButtons.slice(0, 3).map(({ Icon, name }) => (
          <button
            key={name}
            className="flex items-center space-x-2 hover:text-white"
          >
            <Icon className="h-5 w-5" />
            <p>{name}</p>
          </button>
        ))}
        <hr className="border-t-[0.1px] border-gray-900" />

        {sideBarButtons.slice(3).map(({ Icon, name }) => (
          <button
            key={name}
            className="flex items-center space-x-2 hover:text-white"
          >
            <Icon className="h-5 w-5" />
            <p>{name}</p>
          </button>
        ))}
        <hr className="border-t-[0.1px] border-gray-900" />

        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      </div>
    </div>
  );
};

export default Sidebar;

'use client';

import { FaBarsStaggered, FaBell, FaMagnifyingGlass } from 'react-icons/fa6';
import router from 'next/router';
import { useSidebarStore } from '@/store/useSidebarStore';

interface HeaderProps {
  title?: string;
  search?: boolean;
}

export const Header = ({ title = '', search = false }: HeaderProps) => {
  const { open } = useSidebarStore();

  const handleClickMagnifyingGlass = () => {
    router.push('/follows');
  };

  return (
    <div className="fixed left-0 top-0 z-10 flex h-48 w-full items-center justify-between bg-white px-16 md:hidden">
      <div className="flex items-center">
        <FaBarsStaggered
          className="w-24 cursor-pointer text-primary-100"
          onClick={open}
          style={{ strokeWidth: 15 }}
        />
        <p className="ml-16 text-base-semibold">{title}</p>
      </div>
      <div className="flex">
        {search && (
          <FaMagnifyingGlass
            className="mr-8 size-24 cursor-pointer p-4 text-primary-100"
            onClick={handleClickMagnifyingGlass}
          />
        )}
        <FaBell className="right-0 size-24 cursor-pointer p-4 text-primary-100" />
      </div>
    </div>
  );
};

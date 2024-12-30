'use client';

import { FaBarsStaggered, FaBell } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSidebarStore } from '@/store/useSidebarStore';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title = '' }: HeaderProps) => {
  const { open } = useSidebarStore();
  const router = useRouter();

  const handleClickSearch = () => {
    router.push('/search');
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
      <div className="flex gap-8">
        <FaSearch
          className="size-24 cursor-pointer p-4 text-primary-100"
          onClick={handleClickSearch}
        />
        <FaBell className="right-0 size-24 cursor-pointer p-4 text-primary-100" />
      </div>
    </div>
  );
};

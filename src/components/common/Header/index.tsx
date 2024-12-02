'use client';

import { FaBarsStaggered } from 'react-icons/fa6';
import { useSidebarStore } from '@/store/useSidebarStore';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title = '' }: HeaderProps) => {
  const { open } = useSidebarStore();

  return (
    <div className="fixed left-0 top-0 flex h-48 w-full items-center bg-white px-16 md:hidden">
      <FaBarsStaggered
        className="w-24 cursor-pointer text-primary-100"
        onClick={open}
      />
      <p>{title}</p>
    </div>
  );
};

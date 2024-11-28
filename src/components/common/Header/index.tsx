'use client';

import { FaBars } from 'react-icons/fa6';
import { useSidebarStore } from '@/store/useSidebarStore';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title = '' }: HeaderProps) => {
  const { open } = useSidebarStore();

  return (
    <div className="fixed left-0 top-0 flex h-48 w-full items-center bg-white px-16 md:hidden">
      <FaBars className="w-24 cursor-pointer text-slate-400" onClick={open} />
      <p>{title}</p>
    </div>
  );
};

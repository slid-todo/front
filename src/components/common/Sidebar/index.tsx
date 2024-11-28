'use client';

import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useSidebarStore } from '@/store/useSidebarStore';
import { cn } from '@/utils/className';

export const Sidebar = () => {
  const { isOpen, open, close } = useSidebarStore();

  const sidebarClass = cn(
    'h-screen flex flex-col items-center gap-16 border-r border-slate-100 py-16 transition-all duration-200 ease-in-out',
    isOpen ? 'md:w-375' : 'w-0 md:w-60 overflow-hidden',
    'md:flex hidden',
  );

  const iconContainerClass = cn(
    isOpen
      ? 'flex w-full items-center justify-between px-16'
      : 'flex flex-col gap-16',
  );

  return (
    <div className={sidebarClass}>
      <div className={iconContainerClass}>
        <div className="size-24 bg-slate-500">{/* 로고 들어갈 예정 */}</div>
        {isOpen ? (
          <IoClose
            className="size-24 cursor-pointer text-slate-400"
            onClick={close}
          />
        ) : (
          <FaBars
            className="w-24 cursor-pointer text-slate-400"
            onClick={open}
          />
        )}
      </div>
      {isOpen && (
        <div className="size-full">
          <div className="p-16">프로필</div>
          <div className="w-full">
            <div className="border-t border-slate-200 p-16">대시보드</div>
            <div className="border-t border-slate-200 p-16">목표</div>
          </div>
        </div>
      )}
    </div>
  );
};

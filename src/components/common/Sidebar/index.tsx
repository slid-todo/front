'use client';

import { FaAnglesLeft, FaBars, FaChartSimple, FaFlag } from 'react-icons/fa6';

import { AddButton } from '@/components/common/Sidebar/AddButton';
import { useSidebarStore } from '@/store/useSidebarStore';
import { cn } from '@/utils/className';

export const Sidebar = () => {
  const { isOpen, open, close } = useSidebarStore();

  const sidebarClass = cn(
    'fixed top-0 left-0 z-20 flex flex-col items-center h-screen gap-16 py-16 transition-all duration-200 ease-in-out bg-white border-r border-slate-100 md:flex',
    isOpen ? 'md:w-280 w-screen' : 'w-0 md:w-60 overflow-hidden',
  );

  const iconContainerClass = cn(
    isOpen
      ? 'flex w-full items-center justify-between px-16'
      : 'flex flex-col gap-16',
  );

  const backGroundClass = cn(
    'fixed left-280 top-0 hidden h-screen w-full bg-black transition-opacity duration-200 ease-in-out md:block lg:hidden',
    isOpen ? 'opacity-50' : 'opacity-0',
  );

  return (
    <div className={sidebarClass}>
      <div className={iconContainerClass}>
        <div className="size-24 bg-slate-500">{/* 로고 들어갈 예정 */}</div>
        {isOpen ? (
          <FaAnglesLeft
            className="size-24 cursor-pointer p-2 text-slate-400"
            onClick={close}
          />
        ) : (
          <FaBars
            className="size-24 cursor-pointer p-2 text-slate-400"
            onClick={open}
          />
        )}
      </div>
      {isOpen && (
        <div className="flex w-full flex-col items-center gap-16 px-16">
          {/* 프로필 */}
          <div className="flex w-full gap-8">
            <div className="size-69 rounded-8 bg-slate-200" />
            <div>
              <div className="pb-16">
                <p className="text-sm-medium">체다치즈</p>
                <p className="text-xs-medium">email</p>
              </div>
              <button className="text-xs-normal">로그아웃</button>
            </div>
          </div>

          {/* 대시보드 */}
          <div className="flex w-full items-center justify-between border-t border-slate-200 pt-16 sm:block">
            <div className="flex items-center gap-8 md:pb-16">
              <FaChartSimple className="size-24 p-2" />
              <span className="text-xl-semibold">대시보드</span>
            </div>
            <AddButton type="할일" onClick={() => {}} />
          </div>

          {/* 목표 */}
          <div className="flex w-full items-center justify-between border-t border-slate-200 pt-16 sm:block">
            <div className="flex items-center gap-8 md:pb-16">
              <FaFlag className="size-24 p-2" />
              <span className="text-xl-semibold">목표</span>
            </div>
            <AddButton type="목표" onClick={() => {}} />
          </div>
        </div>
      )}
      <div className={backGroundClass} onClick={close} />
    </div>
  );
};

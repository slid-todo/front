'use client';

import { FaAnglesLeft, FaBars, FaChartSimple, FaFlag } from 'react-icons/fa6';

import { useGoalsStore } from '@/store/useGoalStore';
import { useSidebarStore } from '@/store/useSidebarStore';

import { AddButton } from '@/components/Sidebar/AddButton';
import { GoalList } from '@/components/Sidebar/GoalList';
import { MenuItem } from '@/components/Sidebar/MenuItem';
import { Profile } from '@/components/Sidebar/Profle';

import { cn } from '@/utils/className';

export const Sidebar = () => {
  const { isOpen, open, close } = useSidebarStore();
  const { toggleIsNew } = useGoalsStore();

  const handleAddGoal = () => {
    toggleIsNew(true);
  };

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
          <Profile />
          <MenuItem
            icon={<FaChartSimple className="size-24 p-2" />}
            label="대시보드"
          />
          <MenuItem
            icon={<FaFlag className="size-24 p-2" />}
            label="목표"
            addButton={<AddButton onClick={handleAddGoal} />}
          />
          <GoalList />
        </div>
      )}
      <div className={backGroundClass} onClick={close} />
    </div>
  );
};

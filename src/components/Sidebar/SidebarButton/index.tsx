import { ReactNode } from 'react';

import { FaPlus } from 'react-icons/fa6';

import { cn } from '@/utils/className';

interface SidebarButtonProps {
  type: 'default' | 'invert';
  onClick: () => void;
  children: ReactNode;
}

export const SidebarButton = ({
  type,
  onClick,
  children,
}: SidebarButtonProps) => {
  const buttonClass = cn(
    'rounded-12 border border-primary-100 px-10 py-8 md:w-248 md:py-12',
    type === 'default' && 'bg-white text-primary-100',
    type === 'invert' && 'bg-primary-100 text-white',
  );

  return (
    <button onClick={onClick} className={buttonClass}>
      <span className="mr-4 inline-block align-middle">
        <FaPlus className="size-18 p-2 md:size-24" />
      </span>
      <span className="inline-block align-middle text-sm-medium md:text-base-medium">
        {children}
      </span>
    </button>
  );
};

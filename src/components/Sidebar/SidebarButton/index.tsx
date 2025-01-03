import { ReactNode } from 'react';

import { FaPlus } from 'react-icons/fa6';

import { cn } from '@/utils/className';

interface SidebarButtonProps {
  type: 'default' | 'invert';
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const SidebarButton = ({
  type,
  disabled = false,
  onClick,
  children,
}: SidebarButtonProps) => {
  const buttonClass = cn(
    'rounded-12 px-10 py-8 flex-center',
    {
      default: 'bg-white border border-primary-100 text-primary-100',
      invert: disabled
        ? 'bg-custom-white-300 text-white'
        : 'bg-primary-100 text-white',
    }[type],
  );

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      <span className="mr-4">
        <FaPlus className="size-18 p-2" />
      </span>
      <span className="text-sm-medium">{children}</span>
    </button>
  );
};

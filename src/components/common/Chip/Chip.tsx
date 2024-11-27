import React from 'react';
import { FaCheck } from 'react-icons/fa6';

import { cn } from '@/utils/className';

const chipStyles = {
  base: 'flex items-center gap-7 rounded-8 p-8 pl-12 transition-all duration-200 ease-in-out',
  variant: {
    default: 'bg-slate-100 !text-black',
    active: 'bg-slate-900 !text-white',
  },
  size: {
    sm: 'text-sm font-medium',
    lg: 'text-base font-medium',
  },
};

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof chipStyles.variant;
  size?: keyof typeof chipStyles.size;
}

const Chip: React.FC<ChipProps> = ({
  className,
  variant = 'default',
  size = 'sm',
  children,
  ...props
}) => {
  const chipClass = cn(
    chipStyles.base,
    chipStyles.variant[variant],
    chipStyles.size[size],
    className,
  );

  return (
    <button className={chipClass} {...props}>
      <div className="size-18 rounded-6 border border-slate-200 bg-white">
        {variant === 'active' && <FaCheck className="size-16 text-blue-600" />}
      </div>
      {children}
    </button>
  );
};

export default Chip;

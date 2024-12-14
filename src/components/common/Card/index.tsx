import { ReactNode } from 'react';

import { cn } from '@/utils/className';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const cardClass = cn(
    'flex-center w-full flex-col gap-12 rounded-16 bg-white py-65 shadow-sm',
    className,
  );

  return <div className={cardClass}>{children}</div>;
};

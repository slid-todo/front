import { ReactNode } from 'react';

import { cn } from '@/utils/className';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  header?: boolean;
}

export const PageContainer = ({
  children,
  className,
  header = true,
}: PageContainerProps) => {
  const containerClass = cn(
    'flex h-screen w-screen flex-col gap-16 overflow-y-scroll bg-custom-white-100 px-16 scrollbar-hide',
    className,
    header ? 'pt-48 md:pt-16' : 'pt-16',
  );

  return <div className={containerClass}>{children}</div>;
};

import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div
      className={`flex h-screen w-screen flex-col gap-16 overflow-y-scroll bg-custom-white-100 px-16 pt-48 scrollbar-hide md:pt-16 ${className}`}
    >
      {children}
    </div>
  );
};

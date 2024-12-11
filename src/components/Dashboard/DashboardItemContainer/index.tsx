import { ReactNode } from 'react';

interface DashboardItemContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const DashboardItemContainer = ({
  title,
  children,
  className = '',
}: DashboardItemContainerProps) => {
  return (
    <div className={className}>
      <p className="mb-16 text-xl-semibold">{title}</p>
      {children}
    </div>
  );
};

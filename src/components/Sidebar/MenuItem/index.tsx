import { ReactNode } from 'react';

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  addButton?: ReactNode;
  onClick?: () => void;
}

export const MenuItem = ({
  icon,
  label,
  addButton = null,
  onClick,
}: MenuItemProps) => {
  return (
    <div className="flex w-full items-center justify-between border-t border-slate-200 p-16 md:block">
      <div onClick={onClick} className="flex items-center gap-8 md:pb-16">
        {icon}
        <span className="text-xl-semibold">{label}</span>
      </div>
      {addButton}
    </div>
  );
};

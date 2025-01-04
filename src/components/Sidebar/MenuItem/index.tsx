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
    <div className="flex w-full items-center justify-between border-t border-slate-200 p-16">
      <div onClick={onClick} className="flex cursor-pointer items-center gap-8">
        {icon}
        <span className="text-lg-semibold">{label}</span>
      </div>
      {addButton}
    </div>
  );
};

import { IoMdArrowDropdown } from 'react-icons/io';

interface DropdownIconProps {
  isOpenDropdown: boolean;
  hidden: boolean;
  onClick: () => void;
}

export const DropdownIcon = ({
  isOpenDropdown,
  hidden,
  onClick,
}: DropdownIconProps) => {
  const handleDropdown = () => {
    onClick();
  };

  return (
    <>
      <IoMdArrowDropdown
        className={`size-24 cursor-pointer transition-transform duration-300 ${isOpenDropdown ? 'rotate-180' : ''} ${hidden ? 'hidden' : ''}`}
        onClick={handleDropdown}
      />
    </>
  );
};

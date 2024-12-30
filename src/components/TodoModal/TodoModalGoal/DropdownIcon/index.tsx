import { FaAngleDown } from 'react-icons/fa6';

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
      <FaAngleDown
        className={`size-18 cursor-pointer transition-transform duration-300 ${isOpenDropdown ? 'rotate-180' : ''} ${hidden ? 'hidden' : ''}`}
        onClick={handleDropdown}
      />
    </>
  );
};

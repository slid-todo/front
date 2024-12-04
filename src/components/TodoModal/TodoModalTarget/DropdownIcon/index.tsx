import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

interface DropdownIconProps {
  isOpenDropdown: boolean;
  onClick: () => void;
}

export const DropdownIcon = ({
  isOpenDropdown,
  onClick,
}: DropdownIconProps) => {
  const handleDropdown = () => {
    onClick();
  };

  return (
    <>
      {isOpenDropdown ? (
        <IoMdArrowDropup
          className="size-24 cursor-pointer"
          onClick={handleDropdown}
        />
      ) : (
        <IoMdArrowDropdown
          className="size-24 cursor-pointer"
          onClick={handleDropdown}
        />
      )}
    </>
  );
};

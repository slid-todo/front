import { MdVisibilityOff, MdVisibility } from 'react-icons/md';

interface VisibilityIconProps {
  isVisible: boolean;
  onClick: () => void;
}

export const VisibilityIcon = ({ isVisible, onClick }: VisibilityIconProps) => {
  const handleClickIcon = () => {
    onClick();
  };

  return (
    <>
      {isVisible ? (
        <MdVisibility
          className="size-24 cursor-pointer"
          onClick={handleClickIcon}
        />
      ) : (
        <MdVisibilityOff
          className="size-24 cursor-pointer"
          onClick={handleClickIcon}
        />
      )}
    </>
  );
};

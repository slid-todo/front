import { FaEllipsisVertical, FaFlag } from 'react-icons/fa6';

interface GoalHeaderProps {
  title: string;
  color: string;
}

export const GoalHeader = ({ title, color }: GoalHeaderProps) => {
  return (
    <>
      <span className="inline-flex items-center text-base-semibold">
        <FaFlag className="mr-4 size-24 p-2" style={{ fill: color }} />
        {title}
      </span>
      <button
        // onClick={handleClick}
        className="absolute right-16 top-16 flex items-center text-primary-100"
      >
        <FaEllipsisVertical className="size-24 p-2 text-custom-gray-100" />
      </button>
    </>
  );
};

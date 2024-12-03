import { FaPlus } from 'react-icons/fa6';

interface AddButtonProps {
  onClick: () => void;
}

export const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-12 border border-primary-100 bg-white px-10 py-8 text-primary-100 md:w-248 md:py-12"
    >
      <span className="mr-4 inline-block align-middle">
        <FaPlus className="size-18 p-2 md:size-24" />
      </span>
      <span className="inline-block align-middle text-sm-medium md:text-base-medium">
        새 목표
      </span>
    </button>
  );
};

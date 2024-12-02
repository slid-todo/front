import { FaPlus } from 'react-icons/fa6';
import { cn } from '@/utils/className';

interface AddButtonProps {
  type: '할일' | '목표';
  onClick: () => void;
}

export const AddButton = ({ type, onClick }: AddButtonProps) => {
  const buttonClass = cn(
    'py-8 px-10 rounded-12 md:w-248 md:py-12',
    type === '할일'
      ? 'bg-primary-100 text-white'
      : ' by-white text-primary-100 border border-primary-100',
  );

  return (
    <button onClick={onClick} className={buttonClass}>
      <span className="mr-4 inline-block align-middle">
        <FaPlus className="size-18 p-2 md:size-24" />
      </span>
      <span className="inline-block align-middle text-sm-medium md:text-base-medium">
        새 {type}
      </span>
    </button>
  );
};

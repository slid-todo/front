import { FaCheck } from 'react-icons/fa6';
import { cn } from '@/utils/className';
import { TodoStatus } from '@/types/Todos/ModifyTodos/TodoStatus';

interface StatusButtonProps {
  todoStatus: TodoStatus;
  activeStatus: string;
  onClick: () => void;
}

export const StatusButton = ({
  todoStatus,
  activeStatus,
  onClick,
}: StatusButtonProps) => {
  const isActive = todoStatus === activeStatus;

  const buttonClass = cn(
    'flex size-18 items-start justify-center rounded-6 border border-slate-200',
    isActive ? 'bg-blue-600' : 'bg-white',
  );

  return (
    <div className="flex items-center gap-6" onClick={onClick}>
      <button className={buttonClass}>
        {isActive && <FaCheck className="size-16 text-white" />}
      </button>
      <span className="text-base-semibold text-slate-600">{todoStatus}</span>
    </div>
  );
};

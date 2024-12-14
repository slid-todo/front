import { FaFlag, FaPlus } from 'react-icons/fa6';

import TodoModal from '@/components/TodoModal/TodoModalContainer';
import { useTodoModalStore } from '@/store/useTodoModalStore';

interface GoalHeaderProps {
  title: string;
}

export const GoalHeader = ({ title }: GoalHeaderProps) => {
  const { isOpen, open } = useTodoModalStore();

  return (
    <>
      <span className="inline-flex items-center text-base-semibold">
        <FaFlag className="mr-4 size-24 p-2 text-sub-purple" />
        {title}
      </span>
      <button
        onClick={open}
        className="absolute right-16 top-16 flex items-center text-primary-100"
      >
        <FaPlus className="size-24 p-4" />
        <span className="text-sm-semibold">할일 추가</span>
      </button>
      {isOpen && <TodoModal todoType="생성" />}
    </>
  );
};

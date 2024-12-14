import { motion } from 'motion/react';
import { FaAngleDown } from 'react-icons/fa6';

import { TodosResponse } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';
import { formatDateToPoint } from '@/utils/date';

interface TodoHeaderProps {
  open: () => void;
  todo: TodosResponse;
  isOpen: boolean;
}

export const TodoHeader = ({ open, todo, isOpen }: TodoHeaderProps) => {
  return (
    <div onClick={open} className="relative mt-16">
      <div className="">
        <p className="text-base-semibold">{todo.todoTitle}</p>
        <p className="text-xs-medium leading-6 text-custom-gray-100">
          {`${formatDateToPoint(todo.startDate)} - 
          ${formatDateToPoint(todo.endDate)}`}
        </p>
      </div>
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute right-0 top-8"
      >
        <FaAngleDown className="size-24 p-4" style={{ strokeWidth: 15 }} />
      </motion.span>
    </div>
  );
};

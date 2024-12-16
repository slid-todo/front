'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { TodoHeader } from '@/components/Dashboard/GoalList/GoalItem/TodoList/TodoHeader';
import { TodoPic } from '@/components/Dashboard/GoalList/GoalItem/TodoList/TodoPic';
import { TodosResponse } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';

interface TodoListProps {
  todo: TodosResponse;
  color: string;
}

export const TodoList = ({ todo, color }: TodoListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    if (todo.completes.length > 0) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <>
      <TodoHeader open={handleClickToggle} todo={todo} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="grid origin-top grid-cols-4 gap-x-4 gap-y-8 overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {todo.completes.map((complete, index) => (
              <TodoPic key={complete.completeId} index={index} color={color} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

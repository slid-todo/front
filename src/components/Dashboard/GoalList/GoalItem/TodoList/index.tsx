'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TodoTypes } from '@/constants/DashboardMockData';
import { TodoHeader } from './TodoHeader';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todo: TodoTypes;
}

export const TodoList = ({ todo }: TodoListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div key={todo.id} className="pb-16">
      <TodoHeader open={handleClickToggle} todo={todo} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-8 grid grid-cols-4 gap-x-4 gap-y-8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {Array.from({ length: 11 }).map((_, index) => (
              <TodoItem key={index} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TodoTypes } from '@/constants/DashboardMockData';
import { TodoHeader } from './TodoHeader';
import { TodoPic } from './TodoPic';

interface TodoListProps {
  todo: TodoTypes;
}

export const TodoList = ({ todo }: TodoListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <TodoHeader open={handleClickToggle} todo={todo} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="grid origin-top grid-cols-4 gap-x-4 gap-y-8"
            initial={{ scaleY: 0, height: 0, opacity: 0 }}
            animate={{ scaleY: 1, height: 'auto', opacity: 1 }}
            exit={{ scaleY: 0, height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {todo.completes.map((complete, index) => (
              <TodoPic key={complete.completeId} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

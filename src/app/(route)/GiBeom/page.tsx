'use client';
import { useState } from 'react';
import TodoModal from '@/components/common/Modal/TodoModal';
import { TodoType } from '@/types/TodoType';

export default function GiBeom() {
  const [isOpen, setIsOpen] = useState(true);
  const [todoType, setTodoType] = useState<TodoType>('생성');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenTypeAssign = () => {
    setTodoType('생성');
    setIsOpen(true);
  };

  const handleOpenTypeModify = () => {
    setTodoType('수정');
    setIsOpen(true);
  };

  return (
    <div>
      <button className="bg-blue-700" onClick={handleOpenTypeAssign}>
        할일 생성 열어
      </button>
      <button className="bg-red-700" onClick={handleOpenTypeModify}>
        할일 수정 열어
      </button>
      {isOpen ? <TodoModal onClose={handleClose} todoType={todoType} /> : <></>}
    </div>
  );
}

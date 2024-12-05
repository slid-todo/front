'use client';
import { useState } from 'react';
import TodoModal from '@/components/TodoModal';
import { TodoType } from '@/types/TodoType';
import { useTodoModalStore } from '@/store/useTodoModalStore';

export default function GiBeom() {
  const { isOpen, open } = useTodoModalStore();

  const [todoType, setTodoType] = useState<TodoType>('생성');

  const handleOpenTypeAssign = () => {
    setTodoType('생성');
    open();
  };

  const handleOpenTypeModify = () => {
    setTodoType('수정');
    open();
  };

  return (
    <div>
      <button className="bg-blue-700" onClick={handleOpenTypeAssign}>
        할일 생성 열어
      </button>
      <button className="bg-red-700" onClick={handleOpenTypeModify}>
        할일 수정 열어
      </button>
      {isOpen ? <TodoModal todoType={todoType} /> : <></>}
    </div>
  );
}

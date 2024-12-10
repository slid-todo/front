'use client';
// import { useState } from 'react';
// import { TodoType } from '@/types/TodoType';
// import { useTodoModalStore } from '@/store/useTodoModalStore';
// import { Header } from '@/components/common/Header';
import { VerificationNote } from '@/components/VerificationNote/VerificationNoteContainer';
// import TodoModal from '@/components/TodoModal/TodoModalContainer';

export default function GiBeom() {
  // const { isOpen, open } = useTodoModalStore();

  // const [todoType, setTodoType] = useState<TodoType>('생성');

  // const handleOpenTypeAssign = () => {
  //   setTodoType('생성');
  //   open();
  // };

  // const handleOpenTypeModify = () => {
  //   setTodoType('수정');
  //   open();
  // };

  return (
    <div className="h-screen overflow-y-auto">
      <VerificationNote />
      {/* <Header />
      <div className="flex-center h-full">
        <button className="bg-blue-700" onClick={handleOpenTypeAssign}>
          할일 생성 열어
        </button>
        <button className="bg-red-700" onClick={handleOpenTypeModify}>
          할일 수정 열어
        </button>
        {isOpen ? <TodoModal todoType={todoType} /> : <></>}
      </div> */}
    </div>
  );
}

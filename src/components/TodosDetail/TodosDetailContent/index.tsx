'use client';

import { TodoDocs } from './TodoDocs';
import { TodoProfile } from './TodoProfile';
import { TodoRepeat } from './TodoRepeat';

interface TodosDetailContentProps {
  todoId: string;
}

export const TodosDetailContent = ({ todoId }: TodosDetailContentProps) => {
  console.log(todoId);

  return (
    <div className="flex flex-col gap-16">
      <TodoProfile />
      <TodoRepeat />
      <TodoDocs />
    </div>
  );
};

'use client';

import { useTodoDetailQuery } from '@/hooks/apis/Todo/useTodoDetailQuery';
import { Spinner } from '@/components/common/Spinner';
import { TodoDocs } from './TodoDocs';
import { TodoProfile } from './TodoProfile';
import { TodoRepeat } from './TodoRepeat';

interface TodosDetailContentProps {
  todoId: string;
}

export const TodosDetailContent = ({ todoId }: TodosDetailContentProps) => {
  const { details, isLoading } = useTodoDetailQuery(Number(todoId));

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner className="size-28" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      <TodoProfile
        goalColor={details?.goalColor}
        goalTitle={details?.goalTitle}
        todoTitle={details?.todoTitle}
      />
      <TodoRepeat startDate={details?.startDate} endDate={details?.endDate} />
      <TodoDocs todoLink={details?.todoLink} todoPic={details?.todoPic} />
    </div>
  );
};

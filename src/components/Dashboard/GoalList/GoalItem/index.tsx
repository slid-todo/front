'use client';

import { GoalHeader } from '@/components/Dashboard/GoalList/GoalItem/GoalHeader';
import { ProgressLine } from '@/components/Dashboard/GoalList/GoalItem/ProgressLine';
import { TodoList } from '@/components/Dashboard/GoalList/GoalItem/TodoList';

import { TodosResponse } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';

interface GoalItemProps {
  title: string;
  todos: TodosResponse[];
}

export const GoalItem = ({ title, todos }: GoalItemProps) => {
  return (
    <div className="relative w-full rounded-12 bg-white p-16">
      <GoalHeader title={title} />
      <ProgressLine percent={0} />
      {todos.map((todo) => (
        <TodoList key={todo.todoId} todo={todo} />
      ))}
      {todos.length === 0 && (
        <div className="flex-center pt-16 text-sm-normal text-custom-gray-100">
          등록된 할 일이 없습니다
        </div>
      )}
    </div>
  );
};

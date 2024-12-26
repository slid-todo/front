'use client';

import { GoalHeader } from '@/components/Dashboard/GoalList/GoalItem/GoalHeader';
import { ProgressLine } from '@/components/Dashboard/GoalList/GoalItem/ProgressLine';
import { TodoList } from '@/components/Dashboard/GoalList/GoalItem/TodoList';

import { TodosResponse } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';

interface GoalItemProps {
  id: number;
  title: string;
  color: string;
  percent: number;
  todos: TodosResponse[];
}

export const GoalItem = ({
  id,
  title,
  color,
  percent,
  todos,
}: GoalItemProps) => {
  return (
    <div className="relative w-full rounded-12 bg-white p-16 shadow-sm">
      <GoalHeader id={id} title={title} color={color} />
      <ProgressLine percent={percent} color={color} />
      {todos.map((todo) => (
        <TodoList key={todo.todoId} todo={todo} color={color} />
      ))}
      {todos.length === 0 && (
        <div className="flex-center pt-16 text-sm-normal text-custom-gray-100">
          등록된 할 일이 없습니다
        </div>
      )}
    </div>
  );
};

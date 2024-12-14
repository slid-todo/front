'use client';

import { GoalHeader } from '@/components/Dashboard/GoalList/GoalItem/GoalHeader';
import { ProgressLine } from '@/components/Dashboard/GoalList/GoalItem/ProgressLine';
import { TodoList } from '@/components/Dashboard/GoalList/GoalItem/TodoList';

import { TodosResponse } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';

interface GoalItemProps {
  name: string;
  todos: TodosResponse[];
}

export const GoalItem = ({ name, todos }: GoalItemProps) => {
  return (
    <div className="relative w-full rounded-12 bg-white p-16">
      <GoalHeader title={name} />
      <ProgressLine percent={64} />
      {todos.map((todo) => (
        <TodoList key={todo.todoId} todo={todo} />
      ))}
    </div>
  );
};

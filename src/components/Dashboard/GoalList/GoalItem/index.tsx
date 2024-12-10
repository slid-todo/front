import { TodoTypes } from '@/constants/DashboardMockData';
import { GoalHeader } from './GoalHeader';
import { ProgressLine } from './ProgressLine';
import { TodoList } from './TodoList';

interface GaolItemProps {
  name: string;
  todos: TodoTypes[];
}

export const GoalItem = ({ name, todos }: GaolItemProps) => {
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

import { TodoTypes } from '@/constants/DashboardMockData';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todo: TodoTypes;
}

export const TodoList = ({ todo }: TodoListProps) => {
  return (
    <div key={todo.id} className="pb-16">
      <div className="my-8">
        <p className="text-base-semibold">{todo.name}</p>
        <p className="text-xs-semibold leading-6 text-custom-gray-100">
          {todo.startDate} ~ {todo.endDate}
        </p>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-8">
        {Array.from({ length: 11 }).map((_, index) => (
          <TodoItem key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

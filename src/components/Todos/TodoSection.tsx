import { FaPlus } from 'react-icons/fa6';
import { Todo } from '@/types/Todos';
import { TodoItem } from '@/components/Todos';

interface TodoSectionProps {
  title: string;
  todos: Todo[];
  emptyMessage: string;
  showAddButton?: boolean;
}

export const TodoSection = (props: TodoSectionProps) => {
  const { title, todos, emptyMessage, showAddButton } = props;

  return (
    <div className="mt-24 first:mt-0">
      <div className="flex justify-between text-xs-bold text-custom-gray-100">
        {title} ({todos.length})
        {showAddButton && (
          <div className="flex cursor-pointer items-center gap-2 text-sm-medium text-primary-100">
            <FaPlus /> 할 일 추가
          </div>
        )}
      </div>
      {todos.length > 0 ? (
        <div className="mt-12 space-y-2">
          {todos.map((todo, index) => {
            const isLastItem = index === todos.length - 1;
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                className={isLastItem ? '' : 'border-b border-custom-white-200'}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex-center h-120 text-sm-normal text-custom-gray-100">
          {emptyMessage}
        </div>
      )}
    </div>
  );
};

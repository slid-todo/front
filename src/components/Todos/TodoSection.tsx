import { FaPlus } from 'react-icons/fa6';
import { Todo } from '@/types/Todos';
import { TodoItem } from './TodoItem';

interface TodoSectionProps {
  title: string;
  tasks: Todo[];
  emptyMessage: string;
}

export const TodoSection = (props: TodoSectionProps) => {
  const { title, tasks, emptyMessage } = props;

  return (
    <div className="mt-24 first:mt-0">
      <div className="flex justify-between text-xs-bold text-custom-gray-100">
        {title} ({tasks.length})
        <div className="flex cursor-pointer items-center gap-2 text-sm-medium text-primary-100">
          <FaPlus /> 할 일 추가
        </div>
      </div>
      {tasks.length > 0 ? (
        <div className="mt-12 space-y-2">
          {tasks.map((task, index) => {
            const isLastItem = index === tasks.length - 1;
            return (
              <TodoItem
                key={task.id}
                {...task}
                className={isLastItem ? '' : 'border-b border-custom-white-200'}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex h-120 items-center justify-center text-sm-normal text-custom-gray-100">
          {emptyMessage}
        </div>
      )}
    </div>
  );
};

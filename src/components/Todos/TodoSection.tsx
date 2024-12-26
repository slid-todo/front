import { FaPlus } from 'react-icons/fa6';
import { TodoItem } from '@/components/Todos';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';
import { useTodoModalStore } from '@/store/useTodoModalStore';

interface TodoSectionProps {
  title: string;
  todos: TodayTodoItem[];
  emptyMessage: string;
  showAddButton?: boolean;
  currentSortFilter: string;
}

export const TodoSection = (props: TodoSectionProps) => {
  const { title, todos, emptyMessage, showAddButton, currentSortFilter } =
    props;
  const openModal = useTodoModalStore((state) => state.open);

  if (currentSortFilter !== '전체' && title !== currentSortFilter) {
    return null;
  }

  const handleClick = () => {
    openModal('생성');
  };

  return (
    <div className="mt-24 first:mt-0">
      <div className="flex justify-between text-xs-bold text-custom-gray-100">
        {title} ({todos.length})
        {(showAddButton || currentSortFilter === '인증') && (
          <div
            className="flex cursor-pointer items-center gap-2 text-sm-medium text-primary-100"
            onClick={handleClick}
          >
            <FaPlus /> 할 일 추가
          </div>
        )}
      </div>

      {todos.length > 0 ? (
        <div className="mt-12 space-y-2">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.todoId}
              {...todo}
              className={
                index === todos.length - 1
                  ? ''
                  : 'border-b border-custom-white-200'
              }
            />
          ))}
        </div>
      ) : (
        <div className="flex-center h-120 text-sm-normal text-custom-gray-100">
          {emptyMessage}
        </div>
      )}
    </div>
  );
};

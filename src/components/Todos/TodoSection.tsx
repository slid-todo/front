import { FaPlus } from 'react-icons/fa6';
import { TodoItem } from '@/components/Todos';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';
import { useTodoModalStore } from '@/store/useTodoModalStore';

interface TodoSectionProps {
  title: string;
  todos: TodayTodoItem[];
  // emptyMessage: string;
  showAddButton?: boolean;
}

export const TodoSection = (props: TodoSectionProps) => {
  const { title, todos, showAddButton } = props;
  const openModal = useTodoModalStore((state) => state.open);

  const handleClick = () => {
    openModal('생성');
  };

  // todos가 비어있으면 섹션 자체를 렌더링하지 않음
  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="mt-24 first:mt-0">
      <div className="flex justify-between text-xs-bold text-custom-gray-100">
        {title} ({todos.length})
        {showAddButton && (
          <div
            className="flex cursor-pointer items-center gap-2 text-sm-medium text-primary-100"
            onClick={handleClick}
          >
            <FaPlus /> 할 일 추가
          </div>
        )}
      </div>

      {/* 여기서는 todos가 비어있지 않으므로, 바로 목록을 렌더링 */}
      <div className="mt-12 space-y-2">
        {todos.map((todo, index) => {
          const isLastItem = index === todos.length - 1;
          return (
            <TodoItem
              key={todo.todoId}
              {...todo}
              className={isLastItem ? '' : 'border-b border-custom-white-200'}
            />
          );
        })}
      </div>
    </div>
  );
};

import { TODO_EMPTY_STATE_MESSAGES } from '@/constants/Todos/TodoMessages';
import { TodoSection } from '@/components/Todos';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';

interface TodoListProps {
  inProgressTodos: TodayTodoItem[];
  completedTodos: TodayTodoItem[];
  currentSortFilter: string;
}

export const TodoList = (props: TodoListProps) => {
  const { inProgressTodos, completedTodos, currentSortFilter } = props;

  return (
    <>
      <TodoSection
        title="진행"
        todos={inProgressTodos}
        emptyMessage={TODO_EMPTY_STATE_MESSAGES.IN_PROGRESS}
        showAddButton={true}
        currentSortFilter={currentSortFilter}
      />
      <TodoSection
        title="인증"
        todos={completedTodos}
        emptyMessage={TODO_EMPTY_STATE_MESSAGES.COMPLETED}
        currentSortFilter={currentSortFilter}
      />
    </>
  );
};

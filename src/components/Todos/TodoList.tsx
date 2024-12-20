import { TODO_EMPTY_STATE_MESSAGES } from '@/constants/Todos/TodoMessages';
import { TodoSection } from '@/components/Todos';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';

interface TodoListProps {
  inProgressTodos: TodayTodoItem[];
  completedTodos: TodayTodoItem[];
}

export const TodoList = (props: TodoListProps) => {
  const { inProgressTodos, completedTodos } = props;

  return (
    <>
      <TodoSection
        title="진행 중"
        todos={inProgressTodos}
        emptyMessage={TODO_EMPTY_STATE_MESSAGES.IN_PROGRESS}
        showAddButton={true}
      />
      <TodoSection
        title="완료"
        todos={completedTodos}
        emptyMessage={TODO_EMPTY_STATE_MESSAGES.COMPLETED}
      />
    </>
  );
};

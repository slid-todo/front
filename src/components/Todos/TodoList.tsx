import { Todo } from '@/types/Todos';
import { TODO_EMPTY_STATE_MESSAGES } from '@/constants/Todos/TodoMessages';
import { TodoSection } from './TodoSection';

interface TodoListProps {
  inProgressTasks: Todo[];
  completedTasks: Todo[];
}

export const TodoList = (props: TodoListProps) => {
  const { inProgressTasks, completedTasks } = props;

  return (
    <>
      <TodoSection
        title="진행 중"
        tasks={inProgressTasks}
        emptyMessage={TODO_EMPTY_STATE_MESSAGES.IN_PROGRESS}
      />
      <TodoSection
        title="완료"
        tasks={completedTasks}
        emptyMessage={TODO_EMPTY_STATE_MESSAGES.COMPLETED}
      />
    </>
  );
};

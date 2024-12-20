import { useMemo } from 'react';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';

export function useFilteredTodos(
  todos: TodayTodoItem[],
  currentSortFilter: string,
) {
  const { inProgressTodos, completedTodos } = useMemo(() => {
    let inProgress: TodayTodoItem[] = [];
    let completed: TodayTodoItem[] = [];

    if (currentSortFilter === '진행' || currentSortFilter === '전체') {
      inProgress = todos.filter(
        (todo) => todo.complete.completeStatus === '진행',
      );
    }

    if (currentSortFilter === '완료' || currentSortFilter === '전체') {
      completed = todos.filter(
        (todo) => todo.complete.completeStatus === '완료',
      );
    }

    return { inProgressTodos: inProgress, completedTodos: completed };
  }, [todos, currentSortFilter]);

  return { inProgressTodos, completedTodos };
}

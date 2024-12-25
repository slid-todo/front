import { useMemo } from 'react';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';

export function useFilteredTodos(
  todos: TodayTodoItem[],
  currentSortFilter: string,
) {
  const { inProgressTodos, completedTodos } = useMemo(() => {
    if (currentSortFilter === '전체') {
      return {
        inProgressTodos: todos.filter(
          (t) => t.complete.completeStatus === '진행',
        ),
        completedTodos: todos.filter(
          (t) => t.complete.completeStatus === '인증',
        ),
      };
    }

    if (currentSortFilter === '진행') {
      return {
        inProgressTodos: todos.filter(
          (t) => t.complete.completeStatus === '진행',
        ),
        completedTodos: [],
      };
    }

    if (currentSortFilter === '인증') {
      return {
        inProgressTodos: [],
        completedTodos: todos.filter(
          (t) => t.complete.completeStatus === '인증',
        ),
      };
    }

    return { inProgressTodos: [], completedTodos: [] };
  }, [todos, currentSortFilter]);

  return { inProgressTodos, completedTodos };
}

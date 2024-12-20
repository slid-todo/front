import { useMemo } from 'react';
import { TodayTodoItem } from './apis/Todo/useTodayTodo';

export function useFilteredTodos(
  todos: TodayTodoItem[],
  currentSortFilter: string,
) {
  const filteredTodos = useMemo(() => {
    if (currentSortFilter === '진행') {
      return todos.filter((todo) => todo.complete.completeStatus === '진행');
    } else if (currentSortFilter === '완료') {
      return todos.filter((todo) => todo.complete.completeStatus === '완료');
    }
    return todos;
  }, [todos, currentSortFilter]);

  return { filteredTodos };
}

import { useMemo } from 'react';
import { Todo } from '@/types/Todos';

export function useFilteredTodos(
  todos: Todo[],
  currentGoalFilter: string,
  currentSortFilter: string,
) {
  const { inProgressTasks, completedTasks } = useMemo(() => {
    const filtered = todos.filter((todo) => {
      if (currentGoalFilter === '전체') return true;
      return todo.goal === currentGoalFilter;
    });

    if (currentSortFilter === '최신순') {
      filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } else if (currentSortFilter === '오래된 순') {
      filtered.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    }

    const inProgress = filtered.filter((task) => task.status === 'In Progress');
    const completed = filtered.filter((task) => task.status === 'Completed');

    return { inProgressTasks: inProgress, completedTasks: completed };
  }, [todos, currentGoalFilter, currentSortFilter]);

  return { inProgressTasks, completedTasks };
}

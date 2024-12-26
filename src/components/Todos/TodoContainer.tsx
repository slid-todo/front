'use client';

import { useState } from 'react';
import { Filter } from '@/components/common/Filter';
import { TodoList } from '@/components/Todos';
import { useFilteredTodos } from '@/hooks/useFilteredTodos';
import { useTodayTodoQuery } from '@/hooks/apis/Todo/useTodayTodo';
import { sortFilters } from '@/constants/Todos/TodoFilter';

export const TodoContainer = () => {
  const { todayTodos, isLoading, isError, error } = useTodayTodoQuery();

  const [currentSortFilter, setCurrentSortFilter] = useState<string>('전체');

  const handleSortFilterChange = (filter: string) => {
    setCurrentSortFilter(filter);
  };

  const { inProgressTodos, completedTodos } = useFilteredTodos(
    todayTodos,
    currentSortFilter,
  );

  if (isLoading) {
    return <div>불러오는 중...</div>;
  }

  if (isError) {
    return <div>에러 발생: {error?.message}</div>;
  }

  return (
    <div className="flex h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pt-48">
      <div className="mt-16 text-xl-bold text-custom-gray-300">내 할 일</div>
      <Filter
        filters={sortFilters}
        onFilterChange={handleSortFilterChange}
        className="space-x-8"
      />
      <TodoList
        inProgressTodos={inProgressTodos}
        completedTodos={completedTodos}
        currentSortFilter={currentSortFilter}
      />
    </div>
  );
};

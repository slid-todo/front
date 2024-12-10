'use client';

import { useState } from 'react';
import { Filter } from '@/components/common/Filter';
import { TodoList } from '@/components/Todos';
import { useFilteredTodos } from '@/hooks/useFilteredTodos';
import { todos, goalFilters, sortFilters } from '@/mocks/todoData';

export const TodoContainer = () => {
  const [currentSortFilter, setCurrentSortFilter] = useState<string>('최신순');
  const [currentGoalFilter, setCurrentGoalFilter] = useState<string>('전체');

  const handleSortFilterChange = (filter: string) => {
    setCurrentSortFilter(filter);
  };

  const handleGoalFilterChange = (filter: string) => {
    setCurrentGoalFilter(filter);
  };

  const { inProgressTodos, completedTodos } = useFilteredTodos(
    todos,
    currentGoalFilter,
    currentSortFilter,
  );

  return (
    <div className="flex h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pt-48">
      <div className="mt-16 text-xl-bold text-custom-gray-300">내 할 일</div>
      <Filter
        filters={sortFilters}
        onFilterChange={handleSortFilterChange}
        className="space-x-8"
      />
      <Filter
        filters={goalFilters}
        onFilterChange={handleGoalFilterChange}
        className="space-x-8"
      />
      <TodoList
        inProgressTodos={inProgressTodos}
        completedTodos={completedTodos}
      />
    </div>
  );
};

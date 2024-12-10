'use client';

import { useState } from 'react';
import { Header } from '@/components/common/Header';
import { Filter } from '@/components/common/Filter';
import { todos } from '@/mocks/todoData';
import { TodoList } from '@/components/Todos';
import { useFilteredTodos } from '@/hooks/useFilteredTodos';

const sortFilters = ['최신순', '오래된 순'];
const goalFilters = ['전체', '목표 1', '목표 2', '목표 3'];

export default function DashBoardPage() {
  const [currentSortFilter, setCurrentSortFilter] = useState<string>('최신순');
  const [currentGoalFilter, setCurrentGoalFilter] = useState<string>('전체');

  const handleSortFilterChange = (filter: string) => {
    setCurrentSortFilter(filter);
  };

  const handleGoalFilterChange = (filter: string) => {
    setCurrentGoalFilter(filter);
  };

  const { inProgressTasks, completedTasks } = useFilteredTodos(
    todos,
    currentGoalFilter,
    currentSortFilter,
  );

  return (
    <>
      <Header title="대시보드" />
      <div className="flex h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pt-62">
        <h1>내 할 일</h1>
        <div className="flex items-center gap-4">
          <Filter
            filters={sortFilters}
            onFilterChange={handleSortFilterChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <Filter
            filters={goalFilters}
            onFilterChange={handleGoalFilterChange}
          />
        </div>
        <TodoList
          inProgressTasks={inProgressTasks}
          completedTasks={completedTasks}
        />
      </div>
    </>
  );
}

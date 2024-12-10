'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Header } from '@/components/common/Header';
import { Filter } from '@/components/common/Filter';

export default function DashBoardPage() {
  const [currentFilter, setCurrentFilter] = useState<string>('All');

  // 할 일 예시 데이터
  const tasks = [
    { id: 1, title: '할 일 1', goal: '목표 1', status: 'In Progress' },
    { id: 2, title: '할 일 2', goal: '목표 2', status: 'Completed' },
    { id: 3, title: '할 일 3', goal: '목표 1', status: 'In Progress' },
    { id: 4, title: '할 일 4', goal: '목표 3', status: 'In Progress' },
  ];

  // 현재 필터 상태에 따른 할 일 필터링
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === 'All') return true;
    return task.status === currentFilter;
  });

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <Header title="대시보드" />
      <div className="flex h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pt-62">
        <h1>내 할 일</h1>
        <Filter
          filters={['All', 'In Progress', 'Completed']}
          onFilterChange={handleFilterChange}
        />
        <div>
          <div className="flex items-center justify-between">
            할 일 ({filteredTasks.length})
            <div className="flex cursor-pointer items-center">
              <FaPlus /> 할 일 추가
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {filteredTasks.map((task) => (
              <div key={task.id} className="rounded border p-2">
                <div>제목: {task.title}</div>
                <div>목표: {task.goal}</div>
                <div>상태: {task.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

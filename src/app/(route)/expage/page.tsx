'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Header } from '@/components/common/Header';
import { Filter } from '@/components/common/Filter';

// 예시 할 일 데이터
const tasks = [
  {
    id: 1,
    title: '할 일 1',
    goal: '목표 1',
    status: 'In Progress',
    createdAt: new Date('2024-12-01'),
  },
  {
    id: 2,
    title: '할 일 2',
    goal: '목표 2',
    status: 'Completed',
    createdAt: new Date('2024-12-02'),
  },
  {
    id: 3,
    title: '할 일 3',
    goal: '목표 1',
    status: 'In Progress',
    createdAt: new Date('2024-12-03'),
  },
  {
    id: 4,
    title: '할 일 4',
    goal: '목표 3',
    status: 'In Progress',
    createdAt: new Date('2024-11-30'),
  },
];

export default function DashBoardPage() {
  const [currentSortFilter, setCurrentSortFilter] = useState<string>('전체');
  const [currentGoalFilter, setCurrentGoalFilter] = useState<string>('전체');

  const sortFilters = ['전체', '최신순', '오래된 순'];
  const goalFilters = ['전체', '목표 1', '목표 2', '목표 3'];

  const handleSortFilterChange = (filter: string) => {
    setCurrentSortFilter(filter);
  };

  const handleGoalFilterChange = (filter: string) => {
    setCurrentGoalFilter(filter);
  };

  // 목표 필터 적용
  const filteredTasks = tasks.filter((task) => {
    if (currentGoalFilter === '전체') return true;
    return task.goal === currentGoalFilter;
  });

  // 정렬 필터 적용
  if (currentSortFilter === '최신순') {
    filteredTasks.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  } else if (currentSortFilter === '오래된 순') {
    filteredTasks.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  // 상태별 분류
  const inProgressTasks = filteredTasks.filter(
    (task) => task.status === 'In Progress',
  );
  const completedTasks = filteredTasks.filter(
    (task) => task.status === 'Completed',
  );

  return (
    <>
      <Header title="대시보드" />
      <div className="flex h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pt-62">
        <h1>내 할 일</h1>

        {/* 정렬 필터 */}
        <div className="flex items-center gap-4">
          <span>정렬 기준:</span>
          <Filter
            filters={sortFilters}
            onFilterChange={handleSortFilterChange}
          />
        </div>

        {/* 목표 필터 */}
        <div className="flex items-center gap-4">
          <span>목표 필터:</span>
          <Filter
            filters={goalFilters}
            onFilterChange={handleGoalFilterChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>진행 중 ({inProgressTasks.length})</div>
            <div>완료 ({completedTasks.length})</div>
          </div>
          <div className="flex cursor-pointer items-center">
            <FaPlus /> 할 일 추가
          </div>
        </div>

        {/* 진행 중인 할 일 목록 */}
        <div className="mt-4">
          <h2 className="text-lg font-bold">진행 중</h2>
          {inProgressTasks.length > 0 ? (
            <div className="mt-2 space-y-2">
              {inProgressTasks.map((task) => (
                <div key={task.id} className="rounded border p-2">
                  <div>제목: {task.title}</div>
                  <div>목표: {task.goal}</div>
                  <div>상태: {task.status}</div>
                  <div>생성일: {task.createdAt.toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-500">
              현재 진행중인 목표가 없습니다.
            </p>
          )}
        </div>

        {/* 완료된 할 일 목록 */}
        <div className="mt-4">
          <h2 className="text-lg font-bold">완료</h2>
          {completedTasks.length > 0 ? (
            <div className="mt-2 space-y-2">
              {completedTasks.map((task) => (
                <div key={task.id} className="rounded border p-2">
                  <div>제목: {task.title}</div>
                  <div>목표: {task.goal}</div>
                  <div>상태: {task.status}</div>
                  <div>생성일: {task.createdAt.toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-500">
              현재 완료된 목표가 없습니다.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

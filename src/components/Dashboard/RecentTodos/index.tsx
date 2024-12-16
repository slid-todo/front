'use client';

import { FaAngleRight } from 'react-icons/fa6';

import Link from 'next/link';

import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { TodoItem } from '@/components/Todos';
import { Button } from '@/components/common/Button/Button';
import { Card } from '@/components/common/Card';
import { Skeleton } from '@/components/common/Skeleton';
import { useRecentTodosQuery } from '@/hooks/apis/Dashboard/useRecnetTodosQuery';
import { useSidebarStore } from '@/store/useSidebarStore';

export const RecentTodos = () => {
  const { todos, isLoading } = useRecentTodosQuery();

  const { open } = useSidebarStore();

  return (
    <DashboardItemContainer title="최근 등록한 할일" className="relative">
      <Link
        href="/todos"
        className="flex-center absolute right-0 top-0 text-sm-medium text-custom-gray-100"
      >
        모두 보기 <FaAngleRight className="ml-8" />
      </Link>
      {isLoading ? (
        <div>
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="flex h-72">
              <Skeleton className="my-8 size-56 rounded-16" />
              <div className="ml-16 flex h-72 flex-col items-start justify-center gap-10">
                <Skeleton className="h-12 w-40 rounded-16" />
                <Skeleton className="h-20 w-120 rounded-16" />
              </div>
            </div>
          ))}
        </div>
      ) : todos.length === 0 ? (
        <Card>
          <p className="text-sm-normal text-custom-gray-100">
            목표 먼저 등록 후 할 일을 설정해주세요.
          </p>
          <Button onClick={open} size="medium">
            새 목표 등록
          </Button>
        </Card>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.todoId}
              title={todo.todoTitle}
              goal={todo.goalTitle}
              color={todo.goalColor}
            />
          ))}
        </ul>
      )}
    </DashboardItemContainer>
  );
};

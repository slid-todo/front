'use client';

import { FaAngleRight } from 'react-icons/fa6';

import Link from 'next/link';

import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { TodoListSkeleton } from '@/components/Skeletons/TodoListSkeleton';
import { TodoItem } from '@/components/Todos';
import { Button } from '@/components/common/Button/Button';
import { Card } from '@/components/common/Card';
import { NoDataText } from '@/components/common/NoDataText';

import { NO_DATA_MESSAGES } from '@/constants/Messages';
import { useRecentTodosQuery } from '@/hooks/apis/Dashboard/useRecnetTodosQuery';
import { useGoalsQuery } from '@/hooks/apis/useGoalsQuery';
import { useSidebarStore } from '@/store/useSidebarStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';

export const RecentTodos = () => {
  const { todos, isLoading } = useRecentTodosQuery();
  const { goals } = useGoalsQuery();

  const { open: openModal } = useTodoModalStore();
  const { open: openSidebar } = useSidebarStore();

  return (
    <DashboardItemContainer title="최근 등록한 할일" className="relative">
      <Link
        href="/todos"
        className="flex-center absolute right-0 top-0 text-sm-medium text-custom-gray-100"
      >
        모두 보기 <FaAngleRight className="ml-8" />
      </Link>
      {isLoading ? (
        <TodoListSkeleton />
      ) : goals.length === 0 ? (
        <Card>
          <NoDataText text={NO_DATA_MESSAGES.NO_TODO_AND_GOAL} />
          <Button onClick={openSidebar} size="medium">
            새 목표 등록
          </Button>
        </Card>
      ) : todos.length === 0 ? (
        <Card>
          <NoDataText text={NO_DATA_MESSAGES.NO_TODO} />
          <Button onClick={() => openModal('생성')} size="medium">
            새 할일 등록
          </Button>
        </Card>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.todoId}
              todoTitle={todo.todoTitle}
              todoId={todo.todoId}
              goalTitle={todo.goalTitle}
              goalColor={todo.goalColor}
            />
          ))}
        </ul>
      )}
    </DashboardItemContainer>
  );
};

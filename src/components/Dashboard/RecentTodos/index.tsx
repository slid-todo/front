'use client';

import { FaAngleRight } from 'react-icons/fa6';

import Link from 'next/link';

import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { Button } from '@/components/common/Button/Button';
import { Card } from '@/components/common/Card';
import { NoDataText } from '@/components/common/NoDataText';

import { BasicTodoItem } from '@/components/TodosDetail/TodosDetailContent/TodoProfile/BasicTodoItem';
import { NO_DATA_MESSAGES } from '@/constants/Messages';
import { useRecentTodosQuery } from '@/hooks/apis/Dashboard/useRecentTodosQuery';
import { useGoalsQuery } from '@/hooks/apis/useGoalsQuery';
import { useSidebarStore } from '@/store/useSidebarStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';

export const RecentTodos = () => {
  const { todos } = useRecentTodosQuery();
  const { goals } = useGoalsQuery();

  const { open: openModal } = useTodoModalStore();
  const { open: openSidebar } = useSidebarStore();

  const hasTodos = todos.length > 0;
  const hasGoals = goals.length > 0;

  return (
    <DashboardItemContainer title="최근 등록한 할일" className="relative">
      <Link
        href="/todos"
        className="flex-center absolute right-0 top-0 text-sm-medium text-custom-gray-100"
      >
        모두 보기 <FaAngleRight className="ml-8" />
      </Link>

      {!hasGoals && (
        <Card>
          <NoDataText text={NO_DATA_MESSAGES.NO_TODO_AND_GOAL} />
          <Button onClick={openSidebar} size="medium">
            새 목표 등록
          </Button>
        </Card>
      )}

      {hasGoals && !hasTodos && (
        <Card>
          <NoDataText text={NO_DATA_MESSAGES.NO_TODO} />
          <Button onClick={() => openModal('생성')} size="medium">
            새 할일 등록
          </Button>
        </Card>
      )}

      {hasGoals && hasTodos && (
        <ul>
          {todos.map((todo) => (
            <BasicTodoItem
              key={todo.todoId}
              goalColor={todo.goalColor}
              goalTitle={todo.goalTitle}
              todoTitle={todo.todoTitle}
              todoId={todo.todoId}
            />
          ))}
        </ul>
      )}
    </DashboardItemContainer>
  );
};

'use client';

import { FaAngleRight } from 'react-icons/fa6';

import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { TodoItem } from '@/components/Todos';
import { Button } from '@/components/common/Button/Button';
import { Card } from '@/components/common/Card';
import { useTodayTodosQuery } from '@/hooks/apis/Dashboard/useTodayTodosQuery';

export const RecentTodos = () => {
  const { todos } = useTodayTodosQuery();

  return (
    <DashboardItemContainer title="최근 등록한 할일" className="relative">
      <button className="flex-center absolute right-0 top-0 text-sm-medium text-custom-gray-100">
        모두 보기 <FaAngleRight className="ml-8" />
      </button>
      {todos.length === 0 ? (
        <Card>
          <p className="text-sm-normal text-custom-gray-100">
            목표 먼저 등록 후 할 일을 설정해주세요.
          </p>
          <Button size="medium">새 목표 등록</Button>
        </Card>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.todoId}
              title={todo.todoTitle}
              goal={'목표는 아직 안받아옴'}
            />
          ))}
        </ul>
      )}
    </DashboardItemContainer>
  );
};

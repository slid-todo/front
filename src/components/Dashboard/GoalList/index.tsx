'use client';

import { Card } from '@/components/common/Card';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { GoalItem } from '@/components/Dashboard/GoalList/GoalItem';

import { useTodosOfGoalsQuery } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export const GoalList = () => {
  const { goals, fetchNextPage, isLoading } = useTodosOfGoalsQuery();
  const { observerRef } = useInfiniteScroll({ fetchNextPage, isLoading });

  return (
    <DashboardItemContainer title="목표 별 할 일">
      {goals.length > 0 ? (
        <div className="flex flex-col gap-16">
          {goals.map((goal) => (
            <GoalItem
              key={goal.goalId}
              id={goal.goalId}
              title={goal.goalTitle}
              color={goal.goalColor}
              percent={goal.progress}
              todos={goal.todos}
            />
          ))}
          <div ref={observerRef} style={{ height: '1px' }} />
        </div>
      ) : (
        <Card>
          <p className="text-sm-normal text-custom-gray-100">
            등록된 목표가 없습니다.
          </p>
        </Card>
      )}
    </DashboardItemContainer>
  );
};

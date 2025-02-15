'use client';

import { Card } from '@/components/common/Card';
import { NoDataText } from '@/components/common/NoDataText';
import { Spinner } from '@/components/common/Spinner';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { GoalItem } from '@/components/Dashboard/GoalList/GoalItem';
import { GoalListSkeleon } from '@/components/Skeletons/GoalListSkeleton';
import { NO_DATA_MESSAGES } from '@/constants/Messages';

import { useTodosOfGoalsQuery } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export const GoalList = () => {
  const { goals, fetchNextPage, isLoading, isFetchingNextPage } =
    useTodosOfGoalsQuery();
  const { observerRef } = useInfiniteScroll({ fetchNextPage, isLoading });

  const hasGoals = goals.length > 0;

  return (
    <DashboardItemContainer title="목표 별 할 일">
      {isLoading && <GoalListSkeleon />}

      {!isLoading && !hasGoals && (
        <div className="pb-16">
          <Card>
            <NoDataText text={NO_DATA_MESSAGES.NO_GOAL} />
          </Card>
        </div>
      )}

      {!isLoading && hasGoals && (
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
          {isFetchingNextPage && (
            <span className="flex w-full justify-center">
              <Spinner className="size-18" />
            </span>
          )}
        </div>
      )}
    </DashboardItemContainer>
  );
};

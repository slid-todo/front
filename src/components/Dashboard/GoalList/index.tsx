'use client';

import { Card } from '@/components/common/Card';
import { NoDataText } from '@/components/common/NoDataText';
import { Spinner } from '@/components/common/Spinner';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { GoalItem } from '@/components/Dashboard/GoalList/GoalItem';
import { GoalListSkeleon } from '@/components/Skeletons/GoalListSkeleton';
import { NO_DATA_TEXT } from '@/constants/NoDataText';

import { useTodosOfGoalsQuery } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export const GoalList = () => {
  const { goals, fetchNextPage, isLoading, isFetchingNextPage } =
    useTodosOfGoalsQuery();
  const { observerRef } = useInfiniteScroll({ fetchNextPage, isLoading });

  return (
    <DashboardItemContainer title="목표 별 할 일">
      {isLoading ? (
        <GoalListSkeleon />
      ) : goals.length > 0 ? (
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
          {isFetchingNextPage && (
            <span className="flex w-full justify-center">
              <Spinner className="size-18" />
            </span>
          )}
          <div ref={observerRef} style={{ height: '1px' }} />
        </div>
      ) : (
        <Card>
          <NoDataText text={NO_DATA_TEXT.NO_GOAL} />
        </Card>
      )}
    </DashboardItemContainer>
  );
};

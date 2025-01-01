'use client';

import { ProgressLine } from '@/components/Dashboard/GoalList/GoalItem/ProgressLine';
import { TodoList } from '@/components/Dashboard/GoalList/GoalItem/TodoList';

import { useGoalsDetailQuery } from '@/hooks/apis/Goals/useGoalsDetailQuery';

import { NoDataText } from '@/components/common/NoDataText';
import { Spinner } from '@/components/common/Spinner';
import { GoalListSkeleon } from '@/components/Skeletons/GoalListSkeleton';
import { NO_DATA_TEXT } from '@/constants/NoDataText';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { compareDates } from '@/utils/date';
import { GoalHeader } from './GoalHeader';

export const GoalList = () => {
  const { goals, fetchNextPage, isLoading, isFetchingNextPage } =
    useGoalsDetailQuery();
  const { observerRef } = useInfiniteScroll({ fetchNextPage, isLoading });

  return (
    <>
      {isLoading ? (
        <GoalListSkeleon />
      ) : goals.length > 0 ? (
        <div className="flex flex-col gap-16">
          {goals.map((goal) => {
            const todos = goal.todos.sort((a, b) =>
              compareDates(b.endDate, a.endDate),
            );

            return (
              <div
                key={goal.goalId}
                className="relative w-full rounded-12 bg-white p-16 shadow-sm"
              >
                <GoalHeader
                  id={goal.goalId}
                  title={goal.goalTitle}
                  color={goal.goalColor}
                />
                <ProgressLine percent={goal.progress} color={goal.goalColor} />
                {todos.map((todo) => (
                  <TodoList
                    key={todo.todoId}
                    todo={todo}
                    color={goal.goalColor}
                  />
                ))}
              </div>
            );
          })}
          {isFetchingNextPage && (
            <span className="flex w-full justify-center">
              <Spinner className="size-18" />
            </span>
          )}
          <div ref={observerRef} style={{ height: '1px' }} />
        </div>
      ) : (
        <NoDataText text={NO_DATA_TEXT.NO_GOAL} />
      )}
    </>
  );
};

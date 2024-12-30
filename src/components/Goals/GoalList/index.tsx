'use client';

import { ProgressLine } from '@/components/Dashboard/GoalList/GoalItem/ProgressLine';
import { TodoList } from '@/components/Dashboard/GoalList/GoalItem/TodoList';

import { useGoalsDetailQuery } from '@/hooks/apis/Goals/useGoalsDetailQuery';

import { Spinner } from '@/components/common/Spinner';
import { GoalListSkeleon } from '@/components/Skeletons/GoalListSkeleton';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { GoalHeader } from './GoalHeader';

export const GoalList = () => {
  const { goals, fetchNextPage, isLoading, isFetchingNextPage } =
    useGoalsDetailQuery();
  const { observerRef } = useInfiniteScroll({ fetchNextPage, isLoading });

  return (
    <div className="flex flex-col gap-16">
      {isLoading && <GoalListSkeleon />}
      {goals.map((goal) => (
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
          {goal.todos.map((todo) => (
            <TodoList key={todo.todoId} todo={todo} color={goal.goalColor} />
          ))}
        </div>
      ))}
      {isFetchingNextPage && <Spinner />}
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  );
};

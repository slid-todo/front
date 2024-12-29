'use client';

import { useEffect, useRef } from 'react';

import { ProgressLine } from '@/components/Dashboard/GoalList/GoalItem/ProgressLine';
import { TodoList } from '@/components/Dashboard/GoalList/GoalItem/TodoList';

import { useGoalsDetailQuery } from '@/hooks/apis/Goals/useGoalsDetailQuery';

import { GoalHeader } from './GoalHeader';

export const GoalList = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { goals, fetchNextPage, isLoading } = useGoalsDetailQuery();

  useEffect(() => {
    if (!observerRef.current) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const lastEntry = entries[0];
      if (lastEntry.isIntersecting && !isLoading) {
        fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1.0,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, isLoading]);

  return (
    <div className="flex flex-col gap-16">
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
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  );
};

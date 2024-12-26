'use client';

import { useEffect, useRef, useState } from 'react';

import { Card } from '@/components/common/Card';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { GoalItem } from '@/components/Dashboard/GoalList/GoalItem';

import {
  GoalsResponse,
  useTodosOfGoalsQuery,
} from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';

export const GoalList = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const [goals, setGoals] = useState<GoalsResponse[]>([]);
  const [lastGoalId, setLastGoalId] = useState(0);

  const { goals: addGoals, isLoading } = useTodosOfGoalsQuery(lastGoalId);

  useEffect(() => {
    if (!isLoading && addGoals.length > 0) {
      setGoals((prev) => {
        const newGoals = addGoals.filter(
          (goal) => !prev.some((prevGoal) => prevGoal.goalId === goal.goalId),
        );
        return [...prev, ...newGoals];
      });
    }
  }, [addGoals, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && !isLoading) {
          setLastGoalId(goals[goals.length - 1]?.goalId || 0);
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [goals, isLoading]);

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

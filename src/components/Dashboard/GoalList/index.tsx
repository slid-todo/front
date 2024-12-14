'use client';

import { Card } from '@/components/common/Card';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { GoalItem } from '@/components/Dashboard/GoalList/GoalItem';

import { useTodosOfGoals } from '@/hooks/apis/Dashboard/useTodosOfGoalsQuery';

export const GoalList = () => {
  const { goals } = useTodosOfGoals();

  return (
    <DashboardItemContainer title="목표 별 할 일">
      {goals.length > 0 ? (
        <>
          {goals.map((goal) => (
            <GoalItem
              key={goal.goalId}
              name={goal.goalTitle}
              todos={goal.todos}
            />
          ))}
        </>
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

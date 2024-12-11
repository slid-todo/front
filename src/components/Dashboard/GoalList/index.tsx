import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { GoalItem } from '@/components/Dashboard/GoalList/GoalItem';

import { GOALS } from '@/constants/DashboardMockData';

export const GoalList = () => {
  return (
    <DashboardItemContainer title="목표 별 할 일">
      {GOALS.map((goal) => (
        <GoalItem key={goal.id} name={goal.name} todos={goal.todos} />
      ))}
    </DashboardItemContainer>
  );
};

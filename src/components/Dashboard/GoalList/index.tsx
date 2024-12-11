import { GoalTypes } from '@/constants/DashboardMockData';
import { GoalItem } from './GoalItem';

interface GoalListProps {
  goals: GoalTypes[];
}

export const GoalList = ({ goals }: GoalListProps) => {
  return (
    <>
      <p className="text-xl-semibold">목표 별 할 일</p>
      {goals.map((goal) => (
        <GoalItem key={goal.id} name={goal.name} todos={goal.todos} />
      ))}
    </>
  );
};

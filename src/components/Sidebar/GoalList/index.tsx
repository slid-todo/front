import { Input } from '@/components/common/Input';
import { GoalItem } from '@/components/Sidebar/GoalList/GoalItem';

import { useGoalInput } from '@/hooks/useGoalInput';
import { useNewGoalsStore } from '@/store/useNewGoalStore';

import { GoalTypes } from '@/types/goal';

interface GoalListProps {
  goals: GoalTypes[];
}

export const GoalList = ({ goals }: GoalListProps) => {
  const { isNew } = useNewGoalsStore();
  const { inputRef, newGoal, handleInputChange, handleKeyDown, handleBlur } =
    useGoalInput();

  return (
    <div className="flex w-full flex-col px-8">
      {goals.map((goal, index) => (
        <GoalItem key={index} text={goal.goalTitle} color={goal.color} />
      ))}
      {isNew && (
        <div className="flex items-center gap-16 px-8 pb-16">
          <div className="size-16 shrink-0 rounded-full bg-custom-gray-100" />
          <Input
            ref={inputRef}
            value={newGoal}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="bg-custom-white-100"
          />
        </div>
      )}
    </div>
  );
};

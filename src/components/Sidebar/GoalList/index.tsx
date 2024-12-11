import { Input } from '@/components/common/Input';
import { GoalItem } from '@/components/Sidebar/GoalList/GoalItem';

import { useGoalInput } from '@/hooks/useGoalInput';
import { useGoalsStore } from '@/store/useGoalStore';

export const GoalList = () => {
  const { goals, isNew, newGoal } = useGoalsStore();
  const { inputRef, handleInputChange, handleKeyDown, handleBlur } =
    useGoalInput();

  return (
    <div className="flex w-full flex-col px-8">
      {goals.map((goal, index) => (
        <GoalItem key={index} text={goal} />
      ))}
      {isNew && (
        <div className="flex items-center gap-16 px-8 pb-16">
          <div className="size-16 shrink-0 rounded-full bg-primary-100" />
          <Input
            ref={inputRef}
            value={newGoal}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        </div>
      )}
    </div>
  );
};

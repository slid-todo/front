import { ChangeEvent, useEffect, useRef } from 'react';

import { Input } from '@/components/common/Input';
import { GoalItem } from '@/components/Sidebar/GoalList/GoalItem';

import { useGoalsStore } from '@/store/useGoalStore';

export const GoalList = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { goals, setNewGoal, isNew, toggleIsNew, addGoal, newGoal } =
    useGoalsStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGoal(e.target.value);
  };

  const handlePostNewGoal = () => {
    addGoal();
    setNewGoal('');
    toggleIsNew(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newGoal.trim()) {
      handlePostNewGoal();
    }
  };

  const handleBlur = () => {
    if (newGoal.trim()) {
      handlePostNewGoal();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNew]);

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

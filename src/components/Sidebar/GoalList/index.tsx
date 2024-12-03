import { ChangeEvent, useEffect, useRef } from 'react';

import { useGoalsStore } from '@/store/useGoalStore';

import { Input } from '@/components/common/Input';
import { GoalItem } from '@/components/Sidebar/GoalList/GoalItem';

export const GoalList = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { goals, setNewGoal, isNew, toggleIsNew, addGoal, newGoal } =
    useGoalsStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGoal(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newGoal.trim()) {
      addGoal();
      setNewGoal('');
      toggleIsNew(false);
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
        <div className="flex items-center gap-16 px-8">
          <div className="size-16 shrink-0 rounded-full bg-primary-100" />
          <Input
            ref={inputRef}
            value={newGoal}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className=""
          />
        </div>
      )}
    </div>
  );
};

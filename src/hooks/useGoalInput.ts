'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useNewGoalsStore } from '@/store/useNewGoalStore';
import { useSidebarGoalsMutation } from './apis/Sidebar/useSidebarGoalsMutation';

export const useGoalInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { isNew, toggleIsNew } = useNewGoalsStore();

  const { mutate: postNewGoalMutation } = useSidebarGoalsMutation();

  const [newGoal, setNewGoal] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGoal(e.target.value);
  };

  const handlePostNewGoal = () => {
    postNewGoalMutation({ title: newGoal });
    setNewGoal('');
    toggleIsNew();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newGoal.trim()) {
      handlePostNewGoal();
    }
  };

  const handleBlur = () => {
    if (newGoal.trim()) {
      handlePostNewGoal();
    } else {
      toggleIsNew();
    }
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNew, inputRef]);

  return {
    inputRef,
    newGoal,
    handleInputChange,
    handleKeyDown,
    handleBlur,
  };
};

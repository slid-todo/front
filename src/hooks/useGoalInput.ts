'use client';

import { ChangeEvent, useEffect, useRef } from 'react';

import { useGoalsStore } from '@/store/useGoalStore';

export const useGoalInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setNewGoal, isNew, toggleIsNew, addGoal, newGoal } = useGoalsStore();

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
    } else {
      toggleIsNew(false);
    }
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNew, inputRef]);

  return {
    inputRef,
    handleInputChange,
    handleKeyDown,
    handleBlur,
  };
};

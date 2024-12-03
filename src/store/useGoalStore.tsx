import { create } from 'zustand';

interface GoalsState {
  goals: string[];
  isNew: boolean;
  newGoal: string;
  setNewGoal: (value: string) => void;
  addGoal: () => void;
  toggleIsNew: (value: boolean) => void;
}

export const useGoalsStore = create<GoalsState>((set) => ({
  goals: [],
  isNew: false,
  newGoal: '',
  setNewGoal: (value) =>
    set(() => ({
      newGoal: value,
    })),
  addGoal: () =>
    set((state) => {
      if (state.newGoal.trim() === '') return state;
      return {
        goals: [...state.goals, state.newGoal.trim()],
        newGoal: '',
        isNew: false,
      };
    }),
  toggleIsNew: (value) =>
    set(() => ({
      isNew: value,
    })),
}));

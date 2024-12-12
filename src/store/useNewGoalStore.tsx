import { create } from 'zustand';

interface NewGoalsStoreState {
  isNew: boolean;
  toggleIsNew: () => void;
}

export const useNewGoalsStore = create<NewGoalsStoreState>((set) => ({
  isNew: false,
  toggleIsNew: () =>
    set((state) => ({
      isNew: !state.isNew,
    })),
}));

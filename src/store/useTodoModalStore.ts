import { create } from 'zustand';

interface TodoModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useTodoModalStore = create<TodoModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

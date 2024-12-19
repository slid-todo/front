import { create } from 'zustand';
import { TodoType } from '@/types/TodoType';

interface TodoModalState {
  isOpen: boolean;
  todoType: TodoType;
  open: (todoType: TodoType) => void;
  close: () => void;
}

export const useTodoModalStore = create<TodoModalState>((set) => ({
  isOpen: false,
  todoType: '생성',
  open: (todoType: TodoType) => set({ isOpen: true, todoType: todoType }),
  close: () => set({ isOpen: false }),
}));

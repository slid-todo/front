import { create } from 'zustand';

interface TodoDataType {
  title: string;
  goal: { goalId: number; goalTitle: string };
  date: { startDate: Date | undefined; endDate: Date | undefined };
  fileName?: string;
  link?: string;
  setTitle: (title: string) => void;
  setGoal: (goalId: number, goalTitle: string) => void;
  setDate: (startDate: Date | undefined, endDate: Date | undefined) => void;
  setFileName: (fileName: string) => void;
  setLink: (link: string) => void;
  resetAll: () => void;
  resetFileName: () => void;
  resetLink: () => void;
}

export const useTodoDataStore = create<TodoDataType>((set) => ({
  title: '',
  goal: { goalId: 0, goalTitle: '' },
  date: { startDate: undefined, endDate: undefined },
  fileName: '',
  link: '',
  setTitle: (title: string) => set({ title: title }),
  setGoal: (goalId: number, goalTitle: string) =>
    set({ goal: { goalId: goalId, goalTitle: goalTitle } }),
  setDate: (startDate: Date | undefined, endDate: Date | undefined) =>
    set({ date: { startDate: startDate, endDate: endDate } }),
  setFileName: (fileName: string) => set({ fileName: fileName }),
  setLink: (link: string) => set({ link: link }),
  resetFileName: () => set({ fileName: '' }),
  resetLink: () => set({ link: '' }),
  resetAll: () =>
    set({
      title: '',
      goal: { goalId: 0, goalTitle: '' },
      date: { startDate: undefined, endDate: undefined },
      fileName: '',
      link: '',
    }),
}));

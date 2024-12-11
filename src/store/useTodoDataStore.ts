import { create } from 'zustand';

interface TodoDataType {
  title: string;
  goal: { goalId: number; goalTitle: string };
  date: { startDate: Date | undefined; endDate: Date | undefined };
  imageEncodedBase64?: string;
  link?: string;
  setTitle: (title: string) => void;
  setGoal: (goalId: number, goalTitle: string) => void;
  setDate: (startDate: Date | undefined, endDate: Date | undefined) => void;
  setImageEncodedBase64: (encodedFile: string) => void;
  setLink: (link: string) => void;
  resetAll: () => void;
  resetFileName: () => void;
  resetLink: () => void;
}

export const useTodoDataStore = create<TodoDataType>((set) => ({
  title: '',
  goal: { goalId: 0, goalTitle: '' },
  date: { startDate: undefined, endDate: undefined },
  imageEncodedBase64: '',
  link: '',
  setTitle: (title: string) => set({ title: title }),
  setGoal: (goalId: number, goalTitle: string) =>
    set({ goal: { goalId: goalId, goalTitle: goalTitle } }),
  setDate: (startDate: Date | undefined, endDate: Date | undefined) =>
    set({ date: { startDate: startDate, endDate: endDate } }),
  setImageEncodedBase64: (encodedFile: string) =>
    set({ imageEncodedBase64: encodedFile }),
  setLink: (link: string) => set({ link: link }),
  resetFileName: () => set({ imageEncodedBase64: '' }),
  resetLink: () => set({ link: '' }),
  resetAll: () =>
    set({
      title: '',
      goal: { goalId: 0, goalTitle: '' },
      date: { startDate: undefined, endDate: undefined },
      imageEncodedBase64: '',
      link: '',
    }),
}));

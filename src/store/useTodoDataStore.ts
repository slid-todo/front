import { create } from 'zustand';

interface TodoDataType {
  title: string;
  date: { startDate: Date | undefined; endDate: Date | undefined };
  todoLink?: string;
  imageName?: string;
  imageEncodedBase64?: string;
  goal: { goalId: number; goalTitle: string };
  setTitle: (title: string) => void;
  setDate: (startDate: Date | undefined, endDate: Date | undefined) => void;
  setTodoLink: (todoLink: string) => void;
  setImageName: (imageName: string) => void;
  setImageEncodedBase64: (encodedFile: string) => void;
  setGoal: (goalId: number, goalTitle: string) => void;
  resetAll: () => void;
  resetFile: () => void;
  resetLink: () => void;
}

export const useTodoDataStore = create<TodoDataType>((set) => ({
  title: '',
  date: { startDate: undefined, endDate: undefined },
  todoLink: '',
  imageName: '',
  imageEncodedBase64: '',
  goal: { goalId: 0, goalTitle: '' },
  setTitle: (title: string) => set({ title: title }),
  setDate: (startDate: Date | undefined, endDate: Date | undefined) =>
    set({ date: { startDate: startDate, endDate: endDate } }),
  setTodoLink: (todoLink: string) => set({ todoLink: todoLink }),
  setImageName: (imageName: string) => set({ imageName: imageName }),
  setImageEncodedBase64: (encodedFile: string) =>
    set({ imageEncodedBase64: encodedFile }),
  setGoal: (goalId: number, goalTitle: string) =>
    set({ goal: { goalId: goalId, goalTitle: goalTitle } }),
  resetFile: () => set({ imageEncodedBase64: '', imageName: '' }),
  resetLink: () => set({ todoLink: '' }),
  resetAll: () =>
    set({
      title: '',
      goal: { goalId: 0, goalTitle: '' },
      date: { startDate: undefined, endDate: undefined },
      imageEncodedBase64: '',
      imageName: '',
      todoLink: '',
    }),
}));

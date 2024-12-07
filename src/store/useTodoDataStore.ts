import { create } from 'zustand';

interface TodoDataType {
  title: string;
  target: string;
  date: { startDate: Date | undefined; endDate: Date | undefined };
  fileName?: string;
  link?: string;
}

export const useTodoDataStore = create<TodoDataType>((set) => ({
  title: '',
  target: '',
  date: { startDate: undefined, endDate: undefined },
  fileName: '',
  link: '',
  setTitle: (title: string) => set({ title: title }),
  setTarget: (target: string) => set({ target: target }),
  setDate: (startDate: Date, endDate: Date) =>
    set({ date: { startDate: startDate, endDate: endDate } }),
  setFileName: (fileName: string) => set({ fileName: fileName }),
  setLink: (link: string) => set({ link: link }),
}));

import { create } from 'zustand';
import { CreateTodosRequest } from '@/types/CreateTodos/CreateTodosRequest';

interface TodoDataStore {
  todoData: CreateTodosRequest;
  setTodoData: (newData: Partial<CreateTodosRequest>) => void;
  resetAll: () => void;
  resetFile: () => void;
  resetLink: () => void;
}

export const useTodoDataStore = create<TodoDataStore>((set) => ({
  todoData: {
    title: '',
    startDate: '',
    endDate: '',
    todoLink: '',
    imageName: '',
    imageEncodedBase64: '',
    goalId: 0,
    goalTitle: '',
  },

  setTodoData: (newData: Partial<TodoDataStore>) =>
    set((state) => ({
      todoData: {
        ...state.todoData,
        ...newData,
      },
    })),
  resetFile: () =>
    set((state) => ({
      todoData: { ...state.todoData, imageEncodedBase64: '', imageName: '' },
    })),
  resetLink: () =>
    set((state) => ({
      todoData: { ...state.todoData, todoLink: '' },
    })),
  resetAll: () =>
    set({
      todoData: {
        title: '',
        goalId: 0,
        startDate: '',
        endDate: '',
        imageEncodedBase64: '',
        imageName: '',
        todoLink: '',
      },
    }),
}));

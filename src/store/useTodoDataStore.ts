import { create } from 'zustand';
import { CreateTodosRequest } from '@/types/Todos/CreateTodos/CreateTodosRequest';
import { COMMON_TODO_DATA } from '@/constants/Todos/CommonTodoData';
import { ModifyTodosRequest } from '@/types/Todos/ModifyTodos/ModifyTodosRequest';
import { getCreateTodoData, getModifyTodoData } from '@/utils/todoDataMappers';

interface TodoDataStore {
  todoData: typeof COMMON_TODO_DATA;
  setTodoData: (newData: Partial<typeof COMMON_TODO_DATA>) => void;
  resetFile: () => void;
  resetLink: () => void;
  resetAll: () => void;
  getCreateTodoData: () => CreateTodosRequest;
  getModifyTodoData: () => ModifyTodosRequest;
}

export const useTodoDataStore = create<TodoDataStore>((set, get) => ({
  todoData: { ...COMMON_TODO_DATA },
  setTodoData: (newData: Partial<typeof COMMON_TODO_DATA>) =>
    set((state) => ({
      todoData: { ...state.todoData, ...newData },
    })),
  resetFile: () =>
    set((state) => ({
      todoData: { ...state.todoData, imageEncodedBase64: '', imageName: '' },
    })),
  resetLink: () =>
    set((state) => ({
      todoData: { ...state.todoData, todoLink: '' },
    })),
  resetAll: () => set({ todoData: { ...COMMON_TODO_DATA } }),

  getCreateTodoData: () => getCreateTodoData(get().todoData),

  getModifyTodoData: () => getModifyTodoData(get().todoData),
}));

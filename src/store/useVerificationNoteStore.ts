import { create } from 'zustand/react';

interface VerificationNoteState {
  imageUrl: string;
  completePicName: string;
  note: string;
  completeLink: string;
  completeId: number | null;

  todoTitle: string;
  goalTitle: string;

  setImageUrl: (url: string) => void;
  setCompletePicName: (name: string) => void;
  setNote: (note: string) => void;
  setCompleteLink: (link: string) => void;
  setCompleteId: (id: number) => void;

  setTodoTitle: (title: string) => void;
  setGoalTitle: (title: string) => void;

  reset: () => void;
}

export const useVerificationNoteStore = create<VerificationNoteState>(
  (set) => ({
    imageUrl: '',
    completePicName: '',
    note: '',
    completeLink: '임시링크',
    completeId: null,

    todoTitle: '',
    goalTitle: '',

    setImageUrl: (url) => set({ imageUrl: url }),
    setCompletePicName: (name) => set({ completePicName: name }),
    setNote: (note) => set({ note }),
    setCompleteLink: (link) => set({ completeLink: link }),
    setCompleteId: (id) => set({ completeId: id }),

    setTodoTitle: (title) => set({ todoTitle: title }),
    setGoalTitle: (title) => set({ goalTitle: title }),

    reset: () =>
      set({
        imageUrl: '',
        completePicName: '',
        note: '',
        completeLink: '임시링크',
        completeId: null,
        todoTitle: '',
        goalTitle: '',
      }),
  }),
);

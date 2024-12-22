import { create } from 'zustand/react';

interface VerificationNoteState {
  imageUrl: string;
  completePicName: string;
  note: string;
  completeLink: string;
  completeId: number | null;
  setImageUrl: (url: string) => void;
  setCompletePicName: (name: string) => void;
  setNote: (note: string) => void;
  setCompleteLink: (link: string) => void;
  setCompleteId: (id: number) => void;
  reset: () => void;
}

export const useVerificationNoteStore = create<VerificationNoteState>(
  (set) => ({
    imageUrl: '',
    completePicName: '',
    note: '',
    completeLink: '임시링크',
    completeId: null,
    setImageUrl: (url) => set({ imageUrl: url }),
    setCompletePicName: (name) => set({ completePicName: name }),
    setNote: (note) => set({ note }),
    setCompleteLink: (link) => set({ completeLink: link }),
    setCompleteId: (id) => set({ completeId: id }),
    reset: () =>
      set({
        imageUrl: '',
        completePicName: '',
        note: '',
        completeLink: '임시링크',
        completeId: null,
      }),
  }),
);

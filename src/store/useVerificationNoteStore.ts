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
        completeLink: '임시링크', // 지금 회의내용으로는 링크 없애기로 했는데 아직 있어서 잠시 지정 이렇게 해놨어요
        completeId: null,
      }),
  }),
);

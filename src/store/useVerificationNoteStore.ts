import { create } from 'zustand';

interface VerificationNoteState {
  review: string;
  setReview: (review: string) => void;
}

export const useVerificationNoteStore = create<VerificationNoteState>(
  (set) => ({
    review: '',
    setReview: (review: string) => set({ review: review }),
  }),
);

import { ChangeEvent } from 'react';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

export const VerificationNoteTextarea = () => {
  const { review, setReview } = useVerificationNoteStore();

  const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return (
    <textarea
      className="h-60 w-full resize-none bg-custom-white-100 outline-none scrollbar-hide"
      placeholder="이 할 일은 어땠나요?"
      value={review}
      onChange={handleTextarea}
    />
  );
};

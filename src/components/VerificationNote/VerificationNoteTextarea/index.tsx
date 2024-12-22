import { ChangeEvent, useRef } from 'react';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

export const VerificationNoteTextarea = () => {
  const { note, setNote } = useVerificationNoteStore();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      className="h-20 w-full resize-none bg-custom-white-100 text-sm-normal outline-none scrollbar-hide"
      placeholder="이 할 일은 어땠나요?"
      rows={1}
      value={note}
      ref={textareaRef}
      onChange={handleTextarea}
    />
  );
};

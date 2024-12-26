import { Input } from '@/components/common/Input';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

export const VerificationNoteTodo = () => {
  const { todoTitle } = useVerificationNoteStore();
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold">할 일</span>
      <Input value={todoTitle} readOnly />
    </div>
  );
};

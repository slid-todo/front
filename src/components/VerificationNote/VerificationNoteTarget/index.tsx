import { Input } from '@/components/common/Input';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

export const VerificationNoteTarget = () => {
  const { goalTitle } = useVerificationNoteStore();
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold">목표</span>
      <Input value={goalTitle} readOnly />
    </div>
  );
};

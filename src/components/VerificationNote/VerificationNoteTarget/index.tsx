import { Input } from '@/components/common/Input';

export const VerificationNoteTarget = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold">목표</span>
      <Input value={'토익 700점 달성'} readOnly />
    </div>
  );
};

import { Input } from '@/components/common/Input';

export const VerificationNoteTodo = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold">할 일</span>
      <Input value={'[매일] 모의고사 풀기'} readOnly />
    </div>
  );
};

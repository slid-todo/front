import { Input } from '@/components/common/Input';

export const EmailInput = () => {
  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">아이디</span>
      <Input type="text" placeholder="이메일을 입력해주세요" />
    </div>
  );
};

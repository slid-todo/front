import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { AuthInputProps } from '@/types/AuthType';
import { emailValidation } from '@/utils/authValidation';

export const EmailInput = ({ register, error }: AuthInputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">아이디</span>
      <Input
        type="text"
        placeholder={PLACEHOLDERS.EMAIL}
        {...register('email', emailValidation)}
      />
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
};

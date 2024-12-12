import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { AuthInputProps } from '@/types/Auth/AuthInputProps';
import { emailValidation } from '@/utils/authValidation';

export const EmailInput = ({ register, error }: AuthInputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-5">
      <div className="flex w-full flex-col gap-12">
        <span className="text-base-semibold text-slate-800 ">아이디</span>
        <Input
          type="text"
          placeholder={PLACEHOLDERS.EMAIL}
          {...register('email', emailValidation)}
        />
      </div>
      <span className="h-20 text-sm text-error">{error?.message}</span>
    </div>
  );
};

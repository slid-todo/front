import { UseFormRegister, FieldError } from 'react-hook-form';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { AuthDataType } from '@/types/AuthType';

interface EmailInputProps {
  register: UseFormRegister<AuthDataType>;
  error?: FieldError;
}

export const EmailInput = ({ register, error }: EmailInputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">아이디</span>
      <Input
        type="text"
        placeholder={PLACEHOLDERS.EMAIL}
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '올바른 이메일 형식을 입력해주세요.',
          },
        })}
      />
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
};

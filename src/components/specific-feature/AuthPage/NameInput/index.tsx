import { UseFormRegister, FieldError } from 'react-hook-form';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { AuthDataType } from '@/types/AuthType';

interface NameInputProps {
  register: UseFormRegister<AuthDataType>;
  error?: FieldError;
}

export const NameInput = ({ register, error }: NameInputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">아이디</span>
      <Input
        type="text"
        placeholder={PLACEHOLDERS.EMAIL}
        {...register('name', {
          required: '이름을 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z가-힣\s]+$/,
            message: '이름은 알파벳과 한글, 공백만 포함할 수 있습니다.',
          },
        })}
      />
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
};

import { useState } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { SignInType } from '@/types/SignInType';

interface PasswordInputProps {
  register: UseFormRegister<SignInType>;
  error?: FieldError;
}

export const PasswordInput = ({ register, error }: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">비밀번호</span>
      <div className="flex w-full items-center justify-between gap-10 pr-24">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={PLACEHOLDERS.PASSWORD}
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 6,
              message: '비밀번호는 최소 6자 이상이어야 합니다.',
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
              message: '비밀번호는 영문자와 숫자를 포함해야 합니다.',
            },
          })}
        />
        {isVisible ? (
          <MdVisibility
            className="size-24 cursor-pointer"
            onClick={handleClickIcon}
          />
        ) : (
          <MdVisibilityOff
            className="size-24 cursor-pointer"
            onClick={handleClickIcon}
          />
        )}
      </div>
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
};

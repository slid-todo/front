import { useState } from 'react';
import { UseFormRegister, UseFormGetValues, FieldError } from 'react-hook-form';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { AuthDataType } from '@/types/AuthType';

interface PasswordChkInputProps {
  register: UseFormRegister<AuthDataType>;
  error?: FieldError;
  getValues: UseFormGetValues<AuthDataType>;
}

export const PasswordChkInput = ({
  register,
  error,
  getValues,
}: PasswordChkInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">비밀번호 확인</span>
      <div className="flex w-full items-center justify-between gap-10 pr-24">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={PLACEHOLDERS.PASSWORDCHK}
          {...register('passwordChk', {
            required: '비밀번호를 입력해주세요.',
            validate: {
              matchesPassword: (value) =>
                value === getValues('password') ||
                '비밀번호가 일치하지 않습니다.',
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

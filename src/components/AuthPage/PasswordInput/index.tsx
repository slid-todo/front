import { useState } from 'react';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { AuthInputProps } from '@/types/AuthType';
import { passwordValidation } from '@/utils/authValidation';
import { VisibilityIcon } from '../VisibilityIcon';

export const PasswordInput = ({ register, error }: AuthInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex w-full flex-col items-start gap-5">
      <div className="flex w-full flex-col gap-12">
        <span className="text-base-semibold text-slate-800 ">비밀번호</span>
        <div className="flex w-full items-center justify-between gap-10 rounded-12 bg-white pr-24">
          <Input
            type={isVisible ? 'text' : 'password'}
            placeholder={PLACEHOLDERS.PASSWORD}
            {...register('password', passwordValidation)}
          />
          <VisibilityIcon isVisible={isVisible} onClick={handleClickIcon} />
        </div>
      </div>
      <span className="h-20 text-sm text-error">{error?.message}</span>
    </div>
  );
};

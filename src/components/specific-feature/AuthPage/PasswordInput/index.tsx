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
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">비밀번호</span>
      <div className="flex w-full items-center justify-between gap-10 pr-24">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={PLACEHOLDERS.PASSWORD}
          {...register('password', passwordValidation)}
        />
        <VisibilityIcon isVisible={isVisible} onClick={handleClickIcon} />
      </div>
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
};

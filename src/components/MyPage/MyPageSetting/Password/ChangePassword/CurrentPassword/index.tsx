import { useState } from 'react';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { ChangePasswordProps } from '@/types/Auth/ChangePasswordProps';
import { VisibilityIcon } from '@/components/AuthPage/VisibilityIcon';

export const CurrentPassword = ({ register, error }: ChangePasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full items-center justify-between gap-10 rounded-12 bg-white pr-24">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={PLACEHOLDERS.CURRENT_PASSWORD}
          {...register('currentPassword', {
            required: '현재 비밀번호를 입력해주세요',
          })}
        />
        <VisibilityIcon isVisible={isVisible} onClick={handleClickIcon} />
      </div>
      <span className="text-xs-normal text-error">{error?.message}</span>
    </div>
  );
};

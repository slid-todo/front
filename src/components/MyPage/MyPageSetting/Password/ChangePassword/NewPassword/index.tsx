import { useState } from 'react';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { ChangePasswordProps } from '@/types/Auth/ChangePasswordProps';
import { VisibilityIcon } from '@/components/AuthPage/VisibilityIcon';
import { newPasswordValidation } from '@/utils/authValidation';

export const NewPassword = ({
  register,
  getValues,
  error,
}: ChangePasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full items-center justify-between gap-10 rounded-12 bg-white pr-24">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={PLACEHOLDERS.NEW_PASSWORD}
          {...register('newPassword', newPasswordValidation({ getValues }))}
        />
        <VisibilityIcon isVisible={isVisible} onClick={handleClickIcon} />
      </div>

      <span className="text-xs-normal text-error">{error?.message}</span>
    </div>
  );
};

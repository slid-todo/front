import { useState } from 'react';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { ChangePasswordProps } from '@/types/Auth/ChangePasswordProps';
import { VisibilityIcon } from '@/components/AuthPage/VisibilityIcon';

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
      <span className="text-sm-normal">새 비밀번호</span>
      <div className="flex w-full items-center justify-between gap-10 rounded-12 bg-white pr-24">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={PLACEHOLDERS.NEW_PASSWORD}
          {...register('newPassword', {
            required: '새 비밀번호를 입력해주세요',
            minLength: {
              value: 4,
              message: '비밀번호는 최소 4자 이상이어야 합니다.',
            },
            validate: {
              matchesPassword: (value: string | undefined) =>
                value !== getValues?.('currentPassword') ||
                '현재 비밀번호와 동일합니다.',
            },
          })}
        />
        <VisibilityIcon isVisible={isVisible} onClick={handleClickIcon} />
      </div>

      <span className="text-xs-normal text-error">{error?.message}</span>
    </div>
  );
};

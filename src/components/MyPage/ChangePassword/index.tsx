'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/common/Button/Button';
import { ChangePasswordRequest } from '@/types/Auth/ChangePasswordRequest';
import { CurrentPassword } from './CurrentPassword';
import { NewPassword } from './NewPassword';
import { NewPasswordChk } from './NewPasswordChk';

export const ChangePassword = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordRequest>({ mode: 'onBlur' });

  const handleClick: SubmitHandler<ChangePasswordRequest> = () => {
    console.log('dd');
  };

  return (
    <div className="flex flex-col gap-8">
      <form
        className="flex flex-col gap-16"
        onSubmit={handleSubmit(handleClick)}
      >
        <CurrentPassword register={register} error={errors.currentPassword} />
        <NewPassword
          register={register}
          getValues={getValues}
          error={errors.newPassword}
        />
        <NewPasswordChk
          register={register}
          getValues={getValues}
          error={errors.newPasswordCheck}
        />
        <Button size="small" primary={true} className="cursor-pointer">
          비밀번호 변경
        </Button>
      </form>
    </div>
  );
};

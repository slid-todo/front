'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/common/Button/Button';
import { ChangePasswordRequest } from '@/types/Auth/ChangePasswordRequest';
import { useChangePassword } from '@/hooks/apis/Auth/useChangePassword';
import { CurrentPassword } from './CurrentPassword';
import { NewPassword } from './NewPassword';
import { NewPasswordChk } from './NewPasswordChk';

export const ChangePassword = () => {
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordRequest>({ mode: 'onBlur' });

  const { mutate: changePassword, isPending } = useChangePassword(reset);

  const handleClick: SubmitHandler<ChangePasswordRequest> = (
    data: ChangePasswordRequest,
  ) => {
    changePassword(data);
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
        <Button
          size="small"
          primary={true}
          className="cursor-pointer"
          type="submit"
          pending={isPending}
        >
          비밀번호 변경
        </Button>
      </form>
    </div>
  );
};

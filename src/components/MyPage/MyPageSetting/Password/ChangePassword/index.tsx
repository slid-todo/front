'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'motion/react';
import { Button } from '@/components/common/Button/Button';
import { ChangePasswordRequest } from '@/types/Auth/ChangePasswordRequest';
import { useChangePassword } from '@/hooks/apis/Auth/useChangePassword';
import { dropdownVariants } from '@/constants/motionVariants';
import { CurrentPassword } from './CurrentPassword';
import { NewPassword } from './NewPassword';
import { NewPasswordChk } from './NewPasswordChk';

interface ChangePasswordProps {
  isOpen: boolean;
}

export const ChangePassword = ({ isOpen }: ChangePasswordProps) => {
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
    <motion.form
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="flex origin-top flex-col gap-16"
      onSubmit={handleSubmit(handleClick)}
      variants={dropdownVariants}
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
      <div className="flex-center">
        <Button
          size="small"
          primary={true}
          className="mb-16 h-44 cursor-pointer py-0"
          type="submit"
          pending={isPending}
        >
          비밀번호 변경
        </Button>
      </div>
    </motion.form>
  );
};

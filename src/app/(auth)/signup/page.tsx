'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Logo } from '@/components/AuthPage/Logo';
import { EmailInput } from '@/components/AuthPage/EmailInput';
import { PasswordInput } from '@/components/AuthPage/PasswordInput';
import { AuthFooter } from '@/components/AuthPage/AuthFooter';
import { AUTH_FOOTER_MESSAGES } from '@/constants/AuthFooterMessages';
import { MetaData } from '@/components/AuthPage/MetaData';
import { NameInput } from '@/components/AuthPage/NameInput';
import { PasswordChkInput } from '@/components/AuthPage/PasswordChkInput';
import { Button } from '@/components/common/Button/Button';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export default function Signup() {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthDataRequest>({ mode: 'onBlur' });

  const handleClick: SubmitHandler<AuthDataRequest> = (data) => {
    console.log(data);
  };

  return (
    <>
      <MetaData title="Signup" />
      <form
        onSubmit={handleSubmit(handleClick)}
        className="flex w-full flex-col items-center gap-40 px-16 md:px-52 lg:w-640 lg:px-0 "
      >
        <Logo />
        <div className="flex w-full flex-col items-start gap-48">
          <div className="flex w-full flex-col items-start gap-16">
            <NameInput register={register} error={errors.name} />
            <EmailInput register={register} error={errors.email} />
            <PasswordInput register={register} error={errors.password} />
            <PasswordChkInput
              register={register}
              error={errors.passwordChk}
              getValues={getValues}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-40">
            <Button type="submit" size="large">
              확인
            </Button>
            <AuthFooter
              description={AUTH_FOOTER_MESSAGES.SIGNUP}
              linkTo="/signin"
              linkToDescription="로그인"
            />
          </div>
        </div>
      </form>
    </>
  );
}

'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Logo } from '@/components/specific-feature/AuthPage/Logo';
import { EmailInput } from '@/components/specific-feature/AuthPage/EmailInput';
import { PasswordInput } from '@/components/specific-feature/AuthPage/PasswordInput';
import { AuthFooter } from '@/components/specific-feature/AuthPage/AuthFooter';
import { AUTH_FOOTER_MESSAGES } from '@/constants/AuthFooterMessages';
import { MetaData } from '@/components/specific-feature/AuthPage/MetaData';
import { SignInDataType } from '@/types/AuthType';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInDataType>({ mode: 'onBlur' });

  const handleClick: SubmitHandler<SignInDataType> = (data) => {
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
          <div className="flex w-full flex-col items-start gap-24">
            <EmailInput register={register} error={errors.email} />
            <PasswordInput register={register} error={errors.password} />
          </div>
          <div className="flex w-full flex-col items-center gap-40">
            <button
              type="submit"
              className="mt-auto flex w-full items-center justify-center gap-10 self-stretch rounded-12 bg-slate-400 py-12 sm:mt-0"
            >
              <span className="text-base-semibold text-white">확인</span>
            </button>
            <AuthFooter
              description={AUTH_FOOTER_MESSAGES.SIGNIN}
              linkTo="/signin"
              linkToDescription="로그인"
            />
          </div>
        </div>
      </form>
    </>
  );
}

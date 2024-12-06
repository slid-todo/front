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
import { AuthDataType } from '@/types/AuthType';

export default function Signup() {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthDataType>({ mode: 'onBlur' });

  const handleClick: SubmitHandler<AuthDataType> = (data) => {
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
            <button
              type="submit"
              className="mt-auto flex w-full items-center justify-center gap-10 self-stretch rounded-12 bg-slate-400 py-12 sm:mt-0"
            >
              <span className="text-base-semibold text-white">확인</span>
            </button>
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

'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { FaAngleLeft } from 'react-icons/fa6';

import Link from 'next/link';

import { AuthFooter } from '@/components/AuthPage/AuthFooter';
import { EmailInput } from '@/components/AuthPage/EmailInput';
import { MetaData } from '@/components/AuthPage/MetaData';
import { NameInput } from '@/components/AuthPage/NameInput';
import { PasswordChkInput } from '@/components/AuthPage/PasswordChkInput';
import { PasswordInput } from '@/components/AuthPage/PasswordInput';
import { Button } from '@/components/common/Button/Button';
import { AUTH_FOOTER_MESSAGES } from '@/constants/AuthFooterMessages';
import { useSignup } from '@/hooks/apis/Auth/useSignup';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export default function Signup() {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthDataRequest>({ mode: 'onBlur' });

  const { mutate, isPending } = useSignup();

  const handleClick: SubmitHandler<AuthDataRequest> = (data) => {
    mutate(data);
  };

  return (
    <>
      <MetaData title="Signup" />
      <form
        onSubmit={handleSubmit(handleClick)}
        className="flex w-full flex-col items-center gap-40 px-16 md:px-52 lg:w-640 lg:px-0 "
      >
        <div className="flex w-full items-center gap-16 pt-60">
          <Link href="/signin">
            <FaAngleLeft className="size-28 p-4 text-custom-gray-100" />
          </Link>
          <h1 className="text-xl-semibold">회원가입</h1>
        </div>
        <div className="flex w-full flex-col items-start gap-48">
          <div className="flex w-full flex-col items-start gap-16">
            <NameInput register={register} error={errors.name} />
            <EmailInput register={register} error={errors.email} />
            <PasswordInput register={register} error={errors.password} />
            <PasswordChkInput
              register={register}
              error={errors.passwordCheck}
              getValues={getValues}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-40">
            <Button type="submit" size="large" pending={isPending}>
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

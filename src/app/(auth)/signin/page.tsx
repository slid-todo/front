import type { Metadata } from 'next';
import { Logo } from '@/components/specific-feature/AuthPage/Logo';
import { EmailInput } from '@/components/specific-feature/AuthPage/EmailInput';
import { PasswordInput } from '@/components/specific-feature/AuthPage/PasswordInput';
import { AuthFooter } from '@/components/specific-feature/AuthPage/AuthFooter';

export const metadata: Metadata = {
  title: 'Signin',
  description: 'Signin Page',
};

export default function Signin() {
  return (
    <div className="flex w-full flex-col items-center gap-40 px-16 sm:px-52 lg:w-640 lg:px-0 ">
      <Logo />
      <div className="flex w-full flex-col items-start gap-48">
        <div className="flex w-full flex-col items-start gap-24">
          <EmailInput />
          <PasswordInput />
        </div>
        <div className="flex w-full flex-col items-center gap-40">
          <button className="mt-auto flex w-full items-center justify-center gap-10 self-stretch rounded-12 bg-slate-400 py-12 sm:mt-0">
            <span className="text-base-semibold text-white">확인</span>
          </button>
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}

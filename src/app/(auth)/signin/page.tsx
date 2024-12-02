import { MdVisibilityOff } from 'react-icons/md';
import Link from 'next/link';

export default function Signin() {
  return (
    <div className="flex flex-col items-center gap-40 px-16 pt-48">
      <div className="flex-center h-89 w-270 px-12 py-20 ">로고 이미지</div>
      {/*  */}
      <div className="flex w-full flex-col items-start gap-48">
        <div className="flex w-full flex-col items-start gap-24">
          <div className="flex w-full flex-col items-start gap-12">
            <span className="text-base-semibold text-slate-800 ">아이디</span>
            <div className="flex w-full items-center gap-10 px-24 py-12">
              <input
                className="w-full outline-none"
                placeholder="이메일을 입력해주세요"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-12">
            <span className="text-base-semibold text-slate-800 ">비밀번호</span>
            <div className="flex w-full items-center justify-between gap-10 px-24 py-12">
              <input
                className="w-full outline-none"
                placeholder="비밀번호를 입력해주세요"
              />
              <MdVisibilityOff className="size-24 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-40">
          <button className="mt-auto flex w-full items-center justify-center gap-10 self-stretch rounded-12 bg-slate-400 py-12 sm:mt-0">
            <span className="text-base-semibold text-white">확인</span>
          </button>
          <div className="flex items-start gap-4">
            <span className="text-sm-medium text-slate-800">
              찍찍이가 처음이신가요?
            </span>
            <Link
              className="text-sm-medium text-blue-500 underline"
              href="/signup"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

import { MdVisibilityOff } from 'react-icons/md';

export const PasswordInput = () => {
  return (
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
  );
};

export const EmailInput = () => {
  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">아이디</span>
      <div className="flex w-full items-center gap-10 px-24 py-12">
        <input
          className="w-full outline-none"
          placeholder="이메일을 입력해주세요"
        />
      </div>
    </div>
  );
};

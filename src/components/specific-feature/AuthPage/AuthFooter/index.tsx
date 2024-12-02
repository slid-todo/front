import Link from 'next/link';

export const AuthFooter = () => {
  return (
    <div className="flex items-start gap-4">
      <span className="text-sm-medium text-slate-800">
        찍찍이가 처음이신가요?
      </span>
      <Link className="text-sm-medium text-blue-500 underline" href="/signup">
        회원가입
      </Link>
    </div>
  );
};

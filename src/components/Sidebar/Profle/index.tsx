import { useUserQuery } from '@/hooks/apis/useUserQuery';

export const Profile = () => {
  const { email, name } = useUserQuery();

  return (
    <div className="flex w-full gap-8 p-16">
      <div className="size-37 shrink-0 rounded-8 bg-slate-200" />
      <div className="flex w-full justify-between">
        <div>
          <p className="text-sm-medium">{name}</p>
          <p className="text-xs-medium">{email}</p>
        </div>
        <button className="text-xs-normal">로그아웃</button>
      </div>
    </div>
  );
};

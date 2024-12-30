import { useLogout } from '@/hooks/useLogout';

export const Logout = () => {
  const { logout } = useLogout();

  return (
    <div className="flex items-center justify-between py-16">
      <span className="cursor-pointer text-sm-normal" onClick={logout}>
        로그아웃
      </span>
    </div>
  );
};

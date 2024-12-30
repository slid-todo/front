import { FaSignOutAlt } from 'react-icons/fa';
import { useLogout } from '@/hooks/useLogout';

export const Logout = () => {
  const { logout } = useLogout();

  return (
    <div className="flex items-center justify-between py-16" onClick={logout}>
      <span className="cursor-pointer text-sm-normal">로그아웃</span>
      <FaSignOutAlt className="cursor-pointer" />
    </div>
  );
};

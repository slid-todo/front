'use client';

import { Button } from '@/components/common/Button/Button';
import { useLogout } from '@/hooks/useLogout';

export const MyPageFooter = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-auto flex w-full items-center justify-between">
      <Button size="small" primary={false} onClick={logout}>
        로그아웃
      </Button>
      <Button size="small" primary={false}>
        회원탈퇴
      </Button>
    </div>
  );
};

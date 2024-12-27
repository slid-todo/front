'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button/Button';

export const MyPageFooter = () => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'token=; max-age=0; path=/;';
    router.push('/signin');
  };

  return (
    <div className="mt-auto flex w-full items-center justify-between">
      <Button size="small" primary={false} onClick={handleLogout}>
        로그아웃
      </Button>
      <Button size="small" primary={false}>
        회원탈퇴
      </Button>
    </div>
  );
};

'use client';

import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { notify } from '@/store/useToastStore';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = () => {
    document.cookie = 'token=; max-age=0; path=/;';
    notify('success', '로그아웃을 하였습니다', 3000);
    queryClient.clear();
    router.push('/signin');
  };

  return { logout };
};

'use client';

import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = () => {
    document.cookie = 'token=; max-age=0; path=/;';
    queryClient.clear();
    router.push('/signin');
  };

  return { logout };
};

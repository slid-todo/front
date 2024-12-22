import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { signin } from '@/apis/Auth/signin';
import { notify } from '@/store/useToastStore';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const useSignin = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  AuthDataRequest
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data) => signin(data),
    onSuccess: (res: AxiosResponse) => {
      notify('success', '로그인에 성공하였습니다', 3000);
      document.cookie = `token=${res.headers.token}; max-age=3600;`;

      router.push('/dashboard');
    },
    onError: (error: AxiosError) => {
      notify('error', '로그인에 실패하였습니다', 3000);
      console.error('Error Sign in:', error.message);
    },
  });
};

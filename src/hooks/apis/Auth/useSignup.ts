import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { AxiosError, AxiosResponse } from 'axios';
import { signup } from '@/apis/Auth/signup';
import { notify } from '@/store/useToastStore';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const useSignup = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  AuthDataRequest
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data) => signup(data),
    onSuccess: () => {
      notify('success', '회원가입에 성공하였습니다', 3000);
      router.push('/signin');
    },
    onError: (error: AxiosError) => {
      notify('error', '회원가입에 실패하였습니다', 3000);
      console.error('Error Sign up:', error.message);
    },
  });
};

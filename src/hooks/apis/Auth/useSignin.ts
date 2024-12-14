import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { signin } from '@/apis/Auth/signin';
import { notify } from '@/store/useToastStore';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const useSignin = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  AuthDataRequest
> => {
  return useMutation({
    mutationFn: (data) => signin(data),
    onSuccess: (response) => {
      notify('success', '로그인에 성공하였습니다', 3000);
      localStorage.setItem('token', response.headers.token);
    },
    onError: (error: AxiosError) => {
      notify('error', '로그인에 실패하였습니다', 3000);
      console.error('Error Sign in:', error.message);
    },
  });
};

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { signin } from '@/apis/Auth/signin';
import { notify } from '@/store/useToastStore';
import { AuthDataResponse } from '@/types/Auth/AuthDataResponse';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const useSignin = (): UseMutationResult<
  AuthDataResponse,
  AxiosError,
  AuthDataRequest
> => {
  return useMutation({
    mutationFn: (data) => signin(data),
    onSuccess: (data) => {
      notify('success', '로그인에 성공하였습니다', 2000);
      console.log(data); //응답 값 확인을 위한
    },
    onError: (error: AxiosError) => {
      notify('error', '로그인에 실패하였습니다', 2000);
      console.error('Error Sign in:', error.message);
    },
  });
};

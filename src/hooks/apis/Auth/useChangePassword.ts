import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { notify } from '@/store/useToastStore';
import { ChangePasswordRequest } from '@/types/Auth/ChangePasswordRequest';
import { changePassword } from '@/apis/Auth/changePassword';

interface ErrorResponse {
  message: string;
}

export const useChangePassword = (
  reset: () => void,
): UseMutationResult<
  AxiosResponse,
  AxiosError<ErrorResponse>,
  ChangePasswordRequest
> => {
  return useMutation({
    mutationFn: (data) => changePassword(data),
    onSuccess: () => {
      notify('success', '변경에 성공하였습니다.', 3000);
      reset();
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';

      console.log(error.response);
      notify('error', message, 3000);
      console.error('Error Modify ProfilePic:', error.message);
    },
  });
};

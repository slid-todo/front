import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { notify } from '@/store/useToastStore';
import { WithdrawalResponse } from '@/types/response';

export const useWithdrawal = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () =>
      API.delete<WithdrawalResponse>(API_ENDPOINTS.AUTH.WITHDRAWAL),
    onSuccess: () => {
      notify('success', '회원탈퇴에 성공하였습니다.', 3000);
      document.cookie = 'token=; max-age=0; path=/;';
      queryClient.clear();
      router.push('/signin');
    },
    onError: (error) => {
      notify('error', '회원탈퇴에 실패하였습니다.', 3000);
      console.error('Error Withdrawal:', error.message);
    },
  });
};

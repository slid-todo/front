import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { DELETE } from '@/apis/services/httpMethod';
import { WithdrawalResponse } from '@/types/response';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { notify } from '@/store/useToastStore';

export const useWithdrawal = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => DELETE<WithdrawalResponse>(API_ENDPOINTS.AUTH.WITHDRAWAL),
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

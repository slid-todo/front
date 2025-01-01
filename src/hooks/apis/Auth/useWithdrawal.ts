import { useMutation } from '@tanstack/react-query';
import { DELETE } from '@/apis/services/httpMethod';
import { WithdrawalResponse } from '@/types/response';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { notify } from '@/store/useToastStore';
import { useLogout } from '@/hooks/useLogout';

export const useWithdrawal = () => {
  const { logout } = useLogout();

  return useMutation({
    mutationFn: () => DELETE<WithdrawalResponse>(API_ENDPOINTS.AUTH.WITHDRAWAL),
    onSuccess: () => {
      notify('success', '회원탈퇴에 성공하였습니다.', 3000);
      logout();
    },
    onError: (error) => {
      notify('error', '회원탈퇴에 실패하였습니다.', 3000);
      console.error('Error Withdrawal:', error.message);
    },
  });
};

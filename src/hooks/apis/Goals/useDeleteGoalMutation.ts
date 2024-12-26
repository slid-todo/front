import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DELETE } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { BaseResponse } from '@/types/response';

interface DeleteResponse extends BaseResponse {
  data: { goalId: number };
}

export const useDeleteGoalMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (goalId: number) =>
      DELETE<DeleteResponse>(API_ENDPOINTS.GOAL.GOAL(goalId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ALL_GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GOALS] });
      notify('success', '목표 삭제에 성공했습니다.', 3000);
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', '목표 삭제에 실패했습니다.', 3000);
    },
  });
};

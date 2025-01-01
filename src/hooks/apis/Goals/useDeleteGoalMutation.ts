import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DELETE } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { DeleteGoalResponse } from '@/types/response';

export const useDeleteGoalMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (goalId: number) =>
      DELETE<DeleteGoalResponse>(API_ENDPOINTS.GOAL.GOAL(goalId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ALL_GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RECENT_TODOS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS_OF_GOALS] });
      notify('success', '목표 삭제에 성공했습니다.', 3000);
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', '목표 삭제에 실패했습니다.', 3000);
    },
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PUT } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { BaseResponse } from '@/types/response';

interface PostDataTypes {
  title: string;
}

interface EditGoalTitleResponse extends BaseResponse {
  data: {
    goalId: number;
  };
}

export const useEditGoalTitleMutation = (goalId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData: PostDataTypes) =>
      PUT<EditGoalTitleResponse, PostDataTypes>(
        API_ENDPOINTS.GOAL.GOAL(goalId),
        postData,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ALL_GOALS] });
      notify('success', '목표 수정에 성공했습니다.', 3000);
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', '목표 수정에 실패했습니다.', 3000);
    },
  });
};

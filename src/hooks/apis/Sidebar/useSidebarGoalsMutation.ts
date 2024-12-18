import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';

import { POST } from '@/apis/services/httpMethod';
import { GoalsResponse } from '../useGoalsQuery';

interface PostGoalTypes {
  title: string;
}

export const useSidebarGoalsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData: PostGoalTypes) =>
      POST<GoalsResponse, PostGoalTypes>(API_ENDPOINTS.GOAL.GOALS, postData),
    onMutate: async ({ title }) => {
      const prev = queryClient.getQueriesData({ queryKey: [QUERY_KEYS.GOALS] });

      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.GOALS] });
      queryClient.setQueryData([QUERY_KEYS.GOALS], (oldData: GoalsResponse) => {
        if (!oldData?.data) return oldData;

        return {
          ...oldData,
          data: [
            ...oldData.data,
            {
              goalId: Date.now(),
              goalTitle: title,
              color: '#848484',
              createAt: new Date().toISOString(),
            },
          ],
        };
      });

      return { prev };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GOALS] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOS_OF_GOALS],
      });
    },
    onError: (error, newGoal, context) => {
      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GOALS] },
        context?.prev,
      );
      console.error(error.message);
      notify('error', `목표 등록에 실패했습니다.\n ${newGoal.title}`, 3000);
    },
  });
};

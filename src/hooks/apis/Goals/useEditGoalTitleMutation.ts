import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PUT } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { EditGoalTitleResponse, GoalsDetailResponse } from '@/types/Goals';
import { BaseInfiniteQueryResponse } from '@/types/response';

interface PostDataTypes {
  title: string;
}

export const useEditGoalTitleMutation = (editGoalId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData: PostDataTypes) =>
      PUT<EditGoalTitleResponse, PostDataTypes>(
        API_ENDPOINTS.GOAL.GOAL(editGoalId),
        postData,
      ),
    onMutate: async (postData) => {
      const prev = queryClient.getQueriesData({
        queryKey: [QUERY_KEYS.ALL_GOALS],
      });

      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.ALL_GOALS] });

      queryClient.setQueryData(
        [QUERY_KEYS.ALL_GOALS],
        (
          oldData: BaseInfiniteQueryResponse<GoalsDetailResponse[]> | undefined,
        ) => {
          if (!oldData) return undefined;

          return {
            pageParams: oldData.pageParams,
            pages: oldData.pages.map((page) => ({
              ...page,
              data: {
                ...page.data,
                content: page.data.content.map((goal) =>
                  goal.goalId === editGoalId
                    ? { ...goal, goalTitle: postData.title }
                    : goal,
                ),
              },
            })),
          };
        },
      );

      return { prev };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ALL_GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS_OF_GOALS] });
    },
    onSuccess: () => {
      notify('success', '목표 수정에 성공했습니다.', 3000);
    },
    onError: (error, _, context) => {
      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.ALL_GOALS] },
        context?.prev,
      );
      console.error(error.message);
      notify('error', '목표 수정에 실패했습니다.', 3000);
    },
  });
};

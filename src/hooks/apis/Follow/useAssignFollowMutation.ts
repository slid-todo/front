import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { AssignFollowResponse, UserProfileResponse } from '@/types/response';

interface FollowId {
  userId: number;
}

export const useAssignFollowMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) =>
      API.post<AssignFollowResponse, FollowId>(
        API_ENDPOINTS.FOLLOW.ASSIGN_FOLLOW(userId),
      ),
    onMutate: async (userId) => {
      const previousData = queryClient.getQueriesData<UserProfileResponse>({
        queryKey: [QUERY_KEYS.USER_PROFILE, userId],
      });

      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE, userId],
      });

      queryClient.setQueryData(
        [QUERY_KEYS.USER_PROFILE, userId],
        (oldData: UserProfileResponse) => ({
          ...oldData,
          data: {
            ...oldData.data,
            isFollow: true,
          },
        }),
      );
      return { previousData };
    },
    onSettled: (userId) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE, userId],
      });
    },
    onSuccess: () => {
      notify('success', '팔로우 등록', 3000);
    },
    onError: (error, userId, context) => {
      queryClient.setQueryData(
        [QUERY_KEYS.USER_PROFILE, userId],
        context?.previousData,
      );
      console.error(error.message);
      notify('error', '팔로우 등록 실패', 3000);
    },
  });
};

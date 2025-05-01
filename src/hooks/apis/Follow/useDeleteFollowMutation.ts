import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DELETE } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { DeleteFollowResponse, UserProfileResponse } from '@/types/response';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export const useDeleteFollowMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) =>
      DELETE<DeleteFollowResponse>(API_ENDPOINTS.FOLLOW.DELETE_FOLLOW(userId)),
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
            isFollow: false,
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
      notify('success', '팔로우 취소', 3000);
    },
    onError: (error, userId, context) => {
      queryClient.setQueryData(
        [QUERY_KEYS.USER_PROFILE, userId],
        context?.previousData,
      );
      console.error(error.message);
      notify('error', '팔로우 취소 실패', 3000);
    },
  });
};

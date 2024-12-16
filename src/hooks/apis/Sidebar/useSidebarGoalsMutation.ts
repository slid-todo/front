import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';

import axiosInstance from '../../../lib/axiosInstance';

interface PostGoalTypes {
  title: string;
  userId: number;
}

const postSidebarGoals = async (newGoal: PostGoalTypes) => {
  try {
    const response = await axiosInstance.post(
      API_ENDPOINTS.GOAL.GOALS,
      newGoal,
    );

    return response.data;
  } catch (error) {
    console.error('사이드바 목표 추가 에러', error);
    throw error;
  }
};

export const useSidebarGoalsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postSidebarGoals,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SIDEBAR_GOALS] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOS_OF_GOALS],
      });
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', '목표 등록에 실패했습니다.', 3000);
    },
  });
};

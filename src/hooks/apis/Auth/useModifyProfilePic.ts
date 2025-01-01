import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { ModifyProfilePicRequest } from '@/types/Auth/ModifyProfilePicRequest';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { PUT } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';

export const useModifyProfilePic = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  ModifyProfilePicRequest
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ModifyProfilePicRequest) =>
      PUT<AxiosResponse, ModifyProfilePicRequest>(
        API_ENDPOINTS.AUTH.PROFILE_PIC,
        data,
      ),
    onSuccess: () => {
      notify('success', '수정에 성공하였습니다.', 3000);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO] });
    },
    onError: (error) => {
      notify('error', '수정에 실패하였습니다', 3000);
      console.error('Error Modify ProfilePic:', error.message);
    },
  });
};

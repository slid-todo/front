import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { modifyProfilePic } from '@/apis/Auth/modifyProfilePic';
import { ModifyProfilePicRequest } from '@/types/Auth/ModifyProfilePicRequest';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export const useModifyProfilePic = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  ModifyProfilePicRequest
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => modifyProfilePic(data),
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

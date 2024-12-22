import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { CertifiedTodoRequest } from '@/hooks/apis/Todo/useCertifiedTodo';

import axiosInstance from '@/lib/axiosInstance';

export const certifiedTodo = async (
  completeId: number,
  data: CertifiedTodoRequest,
) => {
  try {
    const response = await axiosInstance.put(
      API_ENDPOINTS.TODOS.PUT_CERTIFIED_TODO(completeId),
      data,
    );
    return response.data;
  } catch (error) {
    console.error('Error certified todo: ', error);
    throw error;
  }
};

import { BaseResponse } from '../response';

export interface CreateLikeResponse extends BaseResponse {
  data: {
    completeId: number;
    likesId: number;
  };
}

export interface DeleteLikeResponse extends BaseResponse {
  data: {
    completeId: number;
  };
}

import { TodoDetailTypes, UserProfileTypes } from './data';

export interface BaseResponse {
  statusCode: number;
  timestamp: string;
}

export interface BaseInfiniteQueryResponse<T> {
  pageParams: number[];
  pages: T;
}

export interface WithdrawalResponse extends BaseResponse {
  data: {
    userId: number;
  };
}

export interface TodoDetailResponse extends BaseResponse {
  data: TodoDetailTypes;
}

export interface UserProfileResponse extends BaseResponse {
  data: UserProfileTypes;
}

export interface AssignFollowResponse extends BaseResponse {
  data: {
    followId: number;
  };
}

export interface DeleteFollowResponse extends BaseResponse {
  data: {
    followerId: number;
    followeeId: number;
  };
}

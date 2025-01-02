import { TodoDetailTypes } from './data';

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

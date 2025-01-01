import { ContentTypes } from '../data';
import { BasePageableTypes } from '../pageable';
import { BaseResponse } from '../response';

export interface GetFollowsRequest {
  lastCompleteId: number;
  size: number;
}

export interface CreateFollowsResponse extends BaseResponse {
  data: {
    followId: number;
  };
}

export interface DeleteFollowsResponse extends BaseResponse {
  data: {
    followerId: number;
    followeeId: number;
  };
}

export interface GetFollowsResponse extends BaseResponse {
  data: BasePageableTypes<ContentTypes[]>;
}

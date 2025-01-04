import { CompleteDetailTypes } from '../data';
import { BaseResponse } from '../response';

export interface GetCompleteDetailResponse extends BaseResponse {
  data: CompleteDetailTypes;
}

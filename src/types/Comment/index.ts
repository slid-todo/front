import { BaseResponse } from '../response';

export interface PutCommentRequest {
  content: string;
}

export interface GetCommentRequest {
  completeId: number;
  content: string;
}

export interface CommentResponse extends BaseResponse {
  data: {
    commentId: number;
  };
}

import { GoalTypes } from '../data';
import { BasePageableTypes } from '../pageable';
import { BaseResponse } from '../response';

export interface Goal {
  goalId: number;
  goalTitle: string;
  color: string;
  createdAt: string;
}

export interface GoalsDetailResponse extends BaseResponse {
  data: BasePageableTypes<GoalTypes[]>;
}

export interface GoalsResponse extends BaseResponse {
  data: GoalTypes[];
}

export interface DeleteGoalResponse extends BaseResponse {
  data: { goalId: number };
}

export interface EditGoalTitleResponse extends BaseResponse {
  data: {
    goalId: number;
  };
}

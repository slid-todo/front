import { GoalTypes, ProgressTypes, TodoTypes } from './data';
import { BasePageableTypes } from './pageable';

export interface BaseResponse {
  statusCode: number;
  timestamp: string;
}

export interface BaseInfiniteQueryResponse<T> {
  pageParams: number[];
  pages: T;
}

export interface RecentTodosResponse extends BaseResponse {
  data: BasePageableTypes<TodoTypes[]>;
}

export interface TodayProgressResponse extends BaseResponse {
  data: ProgressTypes;
}

export interface TodosOfGoalsResponse extends BaseResponse {
  data: BasePageableTypes<GoalTypes[]>;
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

import { GoalTypes, ProgressTypes, TodoTypes } from '../data';
import { BasePageableTypes } from '../pageable';
import { BaseResponse } from '../response';

export interface RecentTodosResponse extends BaseResponse {
  data: BasePageableTypes<TodoTypes[]>;
}

export interface TodayProgressResponse extends BaseResponse {
  data: ProgressTypes;
}

export interface TodosOfGoalsResponse extends BaseResponse {
  data: BasePageableTypes<GoalTypes[]>;
}

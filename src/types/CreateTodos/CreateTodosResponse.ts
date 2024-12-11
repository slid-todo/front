export interface CreateTodoResponse {
  statusCode: number;
  data: {
    todoId: number;
  };
  timestamp: string;
}

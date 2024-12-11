export interface CreateTodosRequest {
  title: string;
  startDate: string;
  endDate: string;
  todoLink?: string;
  imageName?: string;
  imageEncodedBase64?: string;
  goalId: number;
}

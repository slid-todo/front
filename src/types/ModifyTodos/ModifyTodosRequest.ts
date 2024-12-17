export interface ModifyTodosRequest {
  title: string;
  startDate: string;
  endDate: string;
  todoStatus: string;
  todoLink?: string;
  imageName?: string;
  imageEncodedBase64?: string;
}

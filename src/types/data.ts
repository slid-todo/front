export interface CompleteTypes {
  completeId: number;
  completePic: string;
  note: string;
  completeLink: string;
  completeStatus: string;
  createdAt: string;
  startDate: string;
}

export interface CompleteDetailTypes extends CompleteTypes {
  userId: number;
  profilePic: string;
  userName: string;
  likeStatus: boolean;
  likeCount: number;
  commentCount: number;
  goalName: string;
  todoName: string;
  comments: CommentTypes[];
}

export interface CommentTypes {
  commentId: number;
  content: string;
  userName: string;
  profileImage: string;
  createdAt: string;
}

export interface TodoTypes {
  todoId: number;
  goalTitle: string;
  goalColor: string;
  todoTitle: string;
  startDate: string;
  endDate: string;
  todoStatus: string;
  todoLink: string;
  todoPic: string;
  createdAt: string;
  completes: CompleteTypes[];
}

export interface GoalTypes {
  goalId: number;
  goalTitle: string;
  goalColor: string;
  progress: number;
  createdAt: string;
  color: string;
  todos: TodoTypes[];
}

export interface ProgressTypes {
  progress: number;
}

export interface ContentTypes {
  userId: number;
  completeId: number;
  completePic: string;
  completeContent: string;
  profilePic: string;
  username: string;
  createdAt: string;
  likeStatus: boolean;
  likeCount: number;
  commentCount: number;
}

export interface TodoDetailTypes extends TodoTypes {
  todoPicName: string;
}
export interface UserProfileTypes {
  name: string;
  profilePic: string;
  isFollow: boolean;
  completeResponses: CompleteTypes[];
}

export interface TodoTypes {
  todoId: number;
  todoTitle: string;
  startDate: string;
  endDate: string;
  todoStatus: boolean;
  todoLink?: string;
  todoPic?: string;
  createdAt: string;
}

export interface GoalTypes {
  id: number;
  name: string;
  todos: TodoTypes[];
}

export const GOALS: GoalTypes[] = [
  {
    id: 1,
    name: '토익 700점 맞기',
    todos: [
      {
        todoId: 1,
        todoTitle: '모의고사 풀기',
        startDate: '2024-01-01',
        endDate: '2024-01-10',
        todoStatus: false,
        createdAt: '2024-01-01',
      },
      {
        todoId: 2,
        todoTitle: '특강 듣기',
        startDate: '2024-01-05',
        endDate: '2024-01-05',
        todoStatus: true,
        createdAt: '2024-01-02',
      },
    ],
  },
  {
    id: 2,
    name: 'JavaScript 기본 공부하기',
    todos: [
      {
        todoId: 3,
        todoTitle: 'ES6 문법 학습',
        startDate: '2024-02-01',
        endDate: '2024-02-05',
        todoStatus: true,
        createdAt: '2024-02-01',
      },
      {
        todoId: 4,
        todoTitle: 'JS 퀴즈 풀기',
        startDate: '2024-02-06',
        endDate: '2024-02-08',
        todoStatus: false,
        createdAt: '2024-02-02',
      },
    ],
  },
  {
    id: 3,
    name: '운동 목표 달성',
    todos: [
      {
        todoId: 5,
        todoTitle: '매일 30분 달리기',
        startDate: '2024-03-01',
        endDate: '2024-03-31',
        todoStatus: false,
        createdAt: '2024-03-01',
      },
      {
        todoId: 6,
        todoTitle: '근력 운동 3회/주',
        startDate: '2024-03-01',
        endDate: '2024-03-31',
        todoStatus: true,
        createdAt: '2024-03-01',
      },
    ],
  },
];

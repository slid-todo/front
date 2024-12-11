export interface CompleteTyps {
  completeId: number;
  completePic: string | null;
  note: string | null;
  completeLink: string | null;
  completeFile: string | null;
  createdAt: string;
  completedDate: string;
}

export interface TodoTypes {
  todoId: number;
  todoTitle: string;
  startDate: string;
  endDate: string;
  todoStatus: boolean;
  todoLink?: string;
  todoPic?: string;
  createdAt: string;
  completes: CompleteTyps[];
}

export interface GoalTypes {
  goalId: number;
  goalTitle: string;
  todos: TodoTypes[];
}

export const GOALS: GoalTypes[] = [
  {
    goalId: 1,
    goalTitle: '토익 700점 맞기',
    todos: [
      {
        todoId: 1,
        todoTitle: '모의고사 풀기',
        startDate: '2024-01-01',
        endDate: '2024-01-03',
        todoStatus: false,
        createdAt: '2024-01-01',
        completes: [
          {
            completeId: 11,
            completePic: null,
            note: null,
            completeLink: null,
            completeFile: null,
            createdAt: '2024-12-10T20:23:02',
            completedDate: '2024-01-01',
          },
          {
            completeId: 12,
            completePic: null,
            note: null,
            completeLink: null,
            completeFile: null,
            createdAt: '2024-12-10T20:23:02',
            completedDate: '2024-01-02',
          },
          {
            completeId: 13,
            completePic: null,
            note: null,
            completeLink: null,
            completeFile: null,
            createdAt: '2024-12-10T20:23:02',
            completedDate: '2024-01-03',
          },
        ],
      },
      {
        todoId: 2,
        todoTitle: '특강 듣기',
        startDate: '2024-01-05',
        endDate: '2024-01-05',
        todoStatus: true,
        createdAt: '2024-01-05',
        completes: [
          {
            completeId: 13,
            completePic: null,
            note: null,
            completeLink: null,
            completeFile: null,
            createdAt: '2024-12-10T20:23:02',
            completedDate: '2024-01-53',
          },
        ],
      },
    ],
  },
  {
    goalId: 2,
    goalTitle: 'JavaScript 기본 공부하기',
    todos: [
      {
        todoId: 3,
        todoTitle: 'ES6 문법 학습',
        startDate: '2024-02-01',
        endDate: '2024-02-05',
        todoStatus: true,
        createdAt: '2024-02-01',
        completes: [],
      },
      {
        todoId: 4,
        todoTitle: 'JS 퀴즈 풀기',
        startDate: '2024-02-06',
        endDate: '2024-02-08',
        todoStatus: false,
        createdAt: '2024-02-02',
        completes: [],
      },
    ],
  },
];

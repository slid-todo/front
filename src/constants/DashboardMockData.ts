export interface TodoTypes {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
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
        id: 1,
        name: '모의고사 풀기',
        startDate: '2024-01-01',
        endDate: '2024-01-10',
      },
      {
        id: 2,
        name: '특강 듣기',
        startDate: '2024-01-01',
        endDate: '2024-01-09',
      },
    ],
  },
];

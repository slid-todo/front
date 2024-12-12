export const API_ENDPOINTS = {
  TODOS: {
    GET_ALL: '/api/v1/todos',
    CREATE: '/api/v1/todos',
    GET_GOALS: '/api/v1/todos/goals',
    GET_GOAL_BY_ID: (goalId: string | number) =>
      `/api/v1/todos/goals/${goalId}`,
  },
};

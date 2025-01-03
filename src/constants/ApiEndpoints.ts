export const API_ENDPOINTS = {
  TODOS: {
    GET_ALL: '/api/v1/todos',
    CREATE: '/api/v1/todos',
    PUT: (todoId: string | number) => `api/v1/todos/${todoId}`,
    DELETE: (todoId: string | number) => `api/v1/todos/${todoId}`,
    GET_GOALS: '/api/v1/todos/goals',
    GET_GOAL_BY_ID: (goalId: string | number) =>
      `/api/v1/todos/goals/${goalId}`,
    GET_TODAY_PROGRESS: '/api/v1/todos/progress',
    GET_TODAY_TODOS: '/api/v1/todos/today',
    PUT_CERTIFIED_TODO: (completeId: number) =>
      `/api/v1/completes/${completeId}`,
    GET_DETAIL: (todoId: number) => `/api/v1/todos/${todoId}`,
  },

  AUTH: {
    SIGN_IN: '/api/v1/auths/login',
    SIGN_UP: '/api/v1/auths/signup',
    USER: '/api/v1/auths/user',
    PROFILE_PIC: '/api/v1/auths/profilepic',
    PASSWORD: '/api/v1/auths/password',
    FOLLOW_COUNT: '/api/v1/auths/mypage',
    WITHDRAWAL: '/api/v1/auths/withdrawl',
    USER_PROFILE: (userId: number) => `/api/v1/auths/profile/${userId}`,
  },

  GOAL: {
    GOALS: '/api/v1/goals',
    ALL_GOALS: '/api/v1/goals/all',
    GOAL: (goalId: number) => `/api/v1/goals/${goalId}`,
  },

  SEARCH: '/api/v1/searches',

  FOLLOW: {
    CREATE: (followerId: number) => `api/v1/follows/${followerId}`,
    DELETE: (followerId: number) => `api/v1/follows/${followerId}`,
    GET: `/api/v1/follows`,
  },

  LIKE: {
    CREATE: (completeId: number) => `api/v1/completes/${completeId}/likes`,
    DELETE: (completeId: number) => `api/v1/completes/${completeId}/likes`,
  },
};

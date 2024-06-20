// Env variables
export const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
export const APP_NAME = import.meta.env.VITE_REACT_APP_NAME;

// Local Storage Variables
export const LocalStorageKeys = {
  user: `user${APP_NAME}`,
  authToken: `authToken${APP_NAME}`,
};

// Api Endpoint
export const ApiEndPoints = {
  auth: {
    signIn: `auth/login`,
    register: `auth/signup`,
    forgotPassword: `auth/forgot-password`,
    resetPassword: `auth/reset-password`,
    changePassword: `auth/change-password`,
  },
  user: {
    userList: `admin/user/list-user`,
    userDetail: `admin/user/details`,
    userActiveInactive: `admin/user/active-inactive`,
  },
  quiz: {
    startQuiz: `start-quiz`,
    rankedPlayer: `get-ranked-user`,
    myQuiz: `my-quiz`,
  },
};

export interface IPaginationList {
  page: number;
  limit: number;
  search: string;
  skip: number;
}

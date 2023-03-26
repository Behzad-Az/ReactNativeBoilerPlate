type NavStack = 'intro' | 'preLogin' | 'postLogin';
export interface AppLoadStatus {
  isAppLoaded?: boolean;
  navStack?: NavStack;
};
export const AUTH_BASE_NAME: string = 'auth'
export const MYSPACE_BASE_NAME: string = 'myspace'
export const TUTOR_BASE_NAME: string = 'tutor'
export const USER_BASE_NAME: string = 'user'
export enum AUTH_ROUTES {
  LOGIN = '/auth/login',
  SIGNUP = '/auth/signup',
  LOGOUT = '/auth/logout',
  USER_CHOICE = '/auth/user-choice',
  VERIFY_USER = '/auth/verify-user',
  FORGET_PASSWORD = '/auth/forget-password',
  RESET_PASSWORD = '/auth/reset-password',
  VERIFY_PASSWORD = '/auth/verify-password',
  CONFIRMATION = '/auth/confirmation',
  TUTOR_FORM = '/auth/tutor-form'
}

export enum PUBLIC_ROUTES {
  HOME = '/',
  CONTACT = '/contact',
  TUTORS = '/tutors',
  ABOUT = '/about',
  SERVICES = '/services',
  BLOG = '/blog'
}

export enum MYSPACE_ROUTES {
  HOME = '/myspace',
  OVERVIEW = '/myspace/overview',
  TUTORS = '/myspace/tutors',
  MESSAGES = '/myspace/messages',
  SETTINGS = '/myspace/settings',
  CALENDAR = '/myspace/calendar',
  CREATE_SESSION = '/myspace/tutor/create-session',
  GET_TOTOR = '/myspace/tutor/:id'
}
export enum MYSPACE_USER_ROUTES {
  GET_USER = '/myspace/user/:id'
}

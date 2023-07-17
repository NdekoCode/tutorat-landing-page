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
  BLOG = '/blog'
}

export enum MYSPACE_ROUTES {
  OVERVIEW = '/myspace/overview',
  TUTORS = '/myspace/tutors',
  MESSAGES = '/myspace/messages',
  SETTINGS = '/myspace/settings'
}
export enum MYSPACE_TUTOR_ROUTES {
  GET_TOTOR = '/tutor/:id',
  CREATE_SESSION = '/tutor/create-session',
  CALENDAR = '/tutor/calendar'
}
export enum MYSPACE_USER_ROUTES {
  GET_USER = '/user/:id'
}

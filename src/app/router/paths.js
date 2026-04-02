export const ROUTE_PATHS = Object.freeze({
  home: '/',
  login: '/login',
  users: '/users',
  userDetail: (id = ':id') => `/users/${id}`,
  about: '/about',
  contact: '/contact',
  profile: '/profile',
});


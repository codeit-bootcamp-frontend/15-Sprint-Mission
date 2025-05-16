const ROUTES = {
  ROOT: '/',
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  ITEMS: '/items',
  PRIVACY: '/privacy',
  FAQ: '/faq',
  ADD_ITEM: '/additem',
  ITEM_DETAIL: (id = ':productId') => `/items/${id}`,
  BOARD: '/board',
  EDIT_ITEM: (id = ':productId') => `/items/${id}/edit`,
};

export default ROUTES;

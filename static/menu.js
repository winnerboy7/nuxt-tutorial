const Menu = [
  {
    icon: 'mdi-apps',
    title: 'Home',
    to: { name: 'index', query: { q: 'Chaimongkol', x: 'hey' }, hash: '#test' },
  },
  {
    icon: 'mdi-chart-bubble',
    title: 'Inspire',
    to: {
      name: 'inspire',
      query: { q: 'dargon', x: 'universe' },
      hash: '#test1',
    },
  },
  {
    icon: 'mdi-apps',
    title: 'Welcome',
    to: { name: 'welcome' },
  },
  {
    icon: 'mdi-apps',
    title: 'Manga Search',
    to: { name: 'manga-search' },
  },
  {
    icon: 'mdi-apps',
    title: 'Persons',
    to: { name: 'persons' },
  },
  {
    icon: 'mdi-apps',
    title: 'Users Using ID',
    to: { name: 'users-id', params: { id: 10 } },
  },
  {
    icon: 'mdi-apps',
    title: 'Posts Using PostID',
    to: { name: 'posts-postId', params: { postId: 11 } },
  },
  {
    icon: 'mdi-apps',
    title: 'Posts Search',
    to: { name: 'posts-search' },
  },
  {
    icon: 'mdi-apps',
    title: 'Users',
    to: { name: 'users' },
  },
  {
    icon: 'mdi-apps',
    title: 'Logout',
    to: { name: 'logout' },
  },
  {
    icon: 'mdi-apps',
    title: 'Login',
    to: { name: 'login' },
  },
];

export default Menu;

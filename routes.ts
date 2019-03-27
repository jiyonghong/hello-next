const routes = require('next-routes');

const pages = [
  {
    name: 'Post',
    pattern: '/post/:id',
    page: 'post',
  },
];

const myRoutes = routes();

pages.map(page => myRoutes.add(page));

export const Link = myRoutes.Link;

export default myRoutes;

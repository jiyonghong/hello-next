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

export const Link = routes.Link;

export default myRoutes;

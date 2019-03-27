import * as express from 'express';
import * as next from 'next';

import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(handle);

    server.listen(3000, (err) => {
      if (err) {
        throw err;
      }

      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });

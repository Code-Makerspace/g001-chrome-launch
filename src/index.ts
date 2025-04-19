import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';

const app = new Hono();

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

// Serve up static files out of the "public" directory where we placed our
// example book from Project Gutenberg.
app.use('/*', serveStatic({ root: './public' }));

serve({
  fetch: app.fetch,
  port,
});

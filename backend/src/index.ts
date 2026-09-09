import app from './app';
import { config } from './config';
import { db } from './services/database';

const startServer = async () => {
  try {
    await db.query('SELECT 1');
    console.log('Database connected successfully');

    const server = app.listen(config.port, () => {
      console.log(`Server running at http://localhost:${config.port}`);
    });

    const shutdown = async () => {
      server.close(async () => {
        await db.close();
        process.exit(0);
      });
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
import app from './app';
import { db } from './services/database';

let isDbConnected = false;

app.use(async (_req, _res, next) => {
  if (!isDbConnected) {
    try {
      await db.query('SELECT 1');
      console.log('Database connected successfully via Serverless function invocation');
      isDbConnected = true;
    } catch (error) {
      console.error('Failed to connect to database in serverless runtime:', error);
    }
  }
  next();
});

export default app;

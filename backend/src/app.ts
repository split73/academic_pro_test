import express from 'express';
import cors from 'cors';
import clickRoutes from './routes/clickRoutes';
import { config } from './config';

const app = express();

app.use(cors({
  origin: config.allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', clickRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found inside Express application',
  });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
});

export default app;

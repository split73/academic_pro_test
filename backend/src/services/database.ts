import { Pool, PoolClient } from 'pg';
import { config } from '../config';

class Database {
  private static instance: Database;
  private pool: Pool;

  private constructor() {
    const cleanConnectionString = config.databaseUrl.replace(/&?channel_binding=[^&]+/, '');
    console.log('db', config.databaseUrl)
    this.pool = new Pool({
      connectionString: cleanConnectionString,
      ssl: config.isProduction ? {
        rejectUnauthorized: false,
      } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });

    this.initializeTable();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private async initializeTable(): Promise<void> {
    const client = await this.pool.connect();

    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS clicks (
          id SERIAL PRIMARY KEY,
          click_id VARCHAR(50) UNIQUE NOT NULL,
          offer VARCHAR(100) NOT NULL,
          sub1 VARCHAR(255),
          ip VARCHAR(45),
          user_agent TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX IF NOT EXISTS idx_clicks_offer ON clicks(offer);
        CREATE INDEX IF NOT EXISTS idx_clicks_created_at ON clicks(created_at DESC);
      `);
      console.log('Database table "clicks" ready');
    } catch (error) {
      console.error('Failed to create table:', error);
    } finally {
      client.release();
    }
  }

  public async getClient(): Promise<PoolClient> {
    return await this.pool.connect();
  }

  public async query<T = any>(
    text: string,
    params?: any[]
  ): Promise<{ rows: T[]; rowCount: number }> {
    const client = await this.pool.connect();
    
    try {
      const result = await client.query(text, params);
      return { rows: result.rows as T[], rowCount: result.rowCount || 0 };
    } finally {
      client.release();
    }
  }

  public async transaction<T>(
    callback: (client: PoolClient) => Promise<T>
  ): Promise<T> {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      const result = await callback(client);
      await client.query('COMMIT');
      return result;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  public async close(): Promise<void> {
    await this.pool.end();
  }
}

export const db = Database.getInstance();
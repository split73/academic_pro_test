import { db } from '../services/database';
import { Click, ClickInput } from '../types';

export class ClickModel {
  static async create(data: ClickInput): Promise<Click> {
    const query = `
      INSERT INTO clicks (click_id, offer, sub1, ip, user_agent)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;

    const { rows } = await db.query<Click>(query, [
      data.click_id,
      data.offer,
      data.sub1,
      data.ip,
      data.user_agent,
    ]);

    return rows[0];
  }

  static async findAll(limit: number = 100, offset: number = 0): Promise<Click[]> {
    const query = `
      SELECT * FROM clicks
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

    const { rows } = await db.query<Click>(query, [limit, offset]);
    return rows;
  }

  static async countAll(): Promise<number> {
    const query = 'SELECT COUNT(*) as count FROM clicks';
    const { rows } = await db.query<{ count: string }>(query);
    return parseInt(rows[0]?.count || '0', 10);
  }

  static async findByClickId(clickId: string): Promise<Click | null> {
    const query = 'SELECT * FROM clicks WHERE click_id = $1';
    const { rows } = await db.query<Click>(query, [clickId]);
    return rows[0] || null;
  }
}
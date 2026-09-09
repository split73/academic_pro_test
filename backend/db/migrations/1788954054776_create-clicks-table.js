/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export const up = (pgm) => {
  pgm.createTable('clicks', {
    id: {
      type: 'serial',
      primaryKey: true,
    },
    click_id: {
      type: 'varchar(50)',
      notNull: true,
      unique: true,
    },
    offer: {
      type: 'varchar(100)',
      notNull: true,
    },
    sub1: {
      type: 'varchar(255)',
      notNull: false,
    },
    ip: {
      type: 'varchar(45)',
      notNull: false,
    },
    user_agent: {
      type: 'text',
      notNull: false,
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createIndex('clicks', 'offer');
  pgm.createIndex('clicks', 'created_at', {
    method: 'btree',
  });
  pgm.createIndex('clicks', 'click_id');
};

/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export const down = (pgm) => {
  pgm.dropTable('clicks');
};
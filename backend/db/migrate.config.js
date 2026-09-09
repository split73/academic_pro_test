module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  migrationsDirectory: 'db/migrations',
  migrationsTable: 'migrations',
  fileExtension: 'js',
  useTypeScript: false,
  schema: 'public',
};
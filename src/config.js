const { env } = process;

module.exports = {
  PORT: env.PORT || 1234,
  NODE_ENV: env.NODE_ENV || 'development',
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_DATABASE:process.env.POSTGRES_DATABASE,
  POSTGRES_USER:process.env.POSTGRES_USER,
  POSTGRES_PORT:process.env.POSTGRES_PORT,
  POSTGRES_PASSWORD:env.POSTGRES_PASSWORD
};

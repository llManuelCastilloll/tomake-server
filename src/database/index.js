const postgres = require('postgres');
const { POSTGRES_DATABASE, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_PORT } = require('../config');

const pgClient = postgres({
    host        : POSTGRES_HOST,         // Postgres ip address or domain name
    port        : 5432,       // Postgres server port
    path        : '',         // unix socket path (usually '/tmp')
    database    : POSTGRES_DATABASE,         // Name of database to connect to
    username    : POSTGRES_USER,         // Username of database user
    password    : POSTGRES_PASSWORD,         // Password of database user
    ssl         : {rejectUnauthorized: false}     // True, or options for tls.connect
  })

module.exports = {pgClient};
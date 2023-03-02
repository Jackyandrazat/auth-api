/* istanbul ignore file */
const { Pool } = require('pg');
const testConfig = {
    host: process.env.PGHOST_TEST,
    port: process.env.PGHOST_TEST,
    user: process.env.PGHOST_TEST,
    password: process.env.PGHOST_TEST,
    database: process.env.PGHOST_TEST,
};

const pool = process.env.NODE_ENV === 'test' ? new Pool(testConfig) : new Pool();


module.exports = pool;
const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
const DB = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

DB.getConnection().catch(() => {
  console.warn(
    'warning:',
    'Failed to get a DB connection.',
    'Did you create a .env file with valid credentials?',
    "Routes using models won't work as intended"
  );
});

module.exports = { DB };

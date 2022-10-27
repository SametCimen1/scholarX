const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();


const proConfig = {
    connectionString:process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      }
}
const pool = new Pool(proConfig);

module.exports = pool;
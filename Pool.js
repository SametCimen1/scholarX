const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();




const pool = new Pool({
    user:"postgres",
    password:"samet123",
    host:"localhost",
    port:5432,
    database:"scholar"
})

module.exports = pool;
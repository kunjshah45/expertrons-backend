const Pool = require('pg');

const pool =  new Pool.Pool({
    user:"nibodh",
    password:"root",
    host:"localhost",
    port:"5432",
    database:"sas",
});

pool.connect();

module.exports = pool;
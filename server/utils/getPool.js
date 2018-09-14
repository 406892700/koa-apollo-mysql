const mysql = require('mysql')
const {
  connectionLimit,
  host,
  port,
  user,
  password,
  database,
} = require('../config/index.config')

const pool = mysql.createPool({
  connectionLimit,
  host,
  port,
  user,
  password,
  database,
})

module.exports = {
  pool,
  query: (str) => {
    console.log(str);
    return new Promise((resolve, reject) => {
      pool.query(str, (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
    })
  },
}

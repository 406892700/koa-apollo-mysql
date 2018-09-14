const User = require('../schema/User')
const query = 'userlist: [User]'

const resolver = {
  userlist: async () => {
    const pool = require('../../utils/getPool')
    return await pool.query(`SELECT * FROM t_user`)
  }
}

module.exports = {
  query,
  resolver
}

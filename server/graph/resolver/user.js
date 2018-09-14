const User = require('../schema/User')

const query = `
  user(id: Int!): User
`

const resolver = {
  user: async (parent, args, context, info) => {
    const pool = require('../../utils/getPool')
    return await pool.query(`SELECT * FROM t_user AS user WHERE user.id = '${args.id}'`).then((data) => {
      return data[0]
    })
  }
}

module.exports = {
  query,
  resolver,
}

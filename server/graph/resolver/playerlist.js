const query = `
  playerlist: [Player],
  player(u_id: Int!): [Player]
`
const pool = require('../../utils/getPool')
const resolver = {
  playerlist: async (parent, args, context, info) => {
    return await pool.query(`SELECT * FROM t_player AS player`)
  },
  player: async (parent, args, context, info) => {
    return await pool.query(`select player.id, player.name, player.team, player.draft from t_like as likes, t_player as player where likes.u_id = ${args.u_id} and player.id = likes.p_id`)
  }
}

module.exports = {
  query,
  resolver,
}
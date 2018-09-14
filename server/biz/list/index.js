const pool = require('../../utils/getPool')
module.exports = (router) => {
  router.post('/list', async (ctx) => {
    const graphl = ctx.request.body // graphql语句
    const result = await pool.query(`SELECT * FROM t_user`)
    ctx.body = {
      list: result
    }
  })
}  
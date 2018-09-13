module.exports = (router) => {
  router.get('/list', async (ctx) => {
    ctx.body = {
      list: [1, 2, 3, 4, 5]
    }
  })
}
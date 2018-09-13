module.exports = (router) => {
  router.get('/user', async (ctx) => {
    ctx.body = {
      user: {
        name: 'simple'
      }
    }
  })
}
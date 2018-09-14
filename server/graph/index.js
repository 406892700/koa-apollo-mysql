const  { gql } = require('apollo-server-koa')

const getFile = require('./getFile') 

const getSchema = () => {
  const path = './schema'
  return getFile(path).map((it) => {
    return require(`./${it}`)
  })

}

const getResolver = () => {
  const path = './resolver'
  return getFile(path).map((it) => {
    return require(`./${it}`)
  })
}

module.exports = () => {
  const schemaList = getSchema()
  const resolverList = getResolver()

  const typeDefs = gql`
    type Query {
      ${resolverList.map(({ query }) => query).join('\n')}
    }

    ${schemaList.join('\n')}
  `

  const resolvers = {
    
  }

  resolverList.forEach(({resolver}) => {
    resolvers.Query = {
      ...resolvers.Query,
      ...resolver
    }
  })

  return { typeDefs, resolvers }
}

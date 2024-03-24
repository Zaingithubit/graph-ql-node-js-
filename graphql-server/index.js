const {ApolloServer}= require("apollo-server")
const {typeDefs}= require("./schema/type-defs")
const {resolvers}= require("./schema/resolver")

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=>{
    console.log(`server at running in this port | url : ${url}`)
})
//Dependencies
const { ApolloServer } = require('apollo-server-express')

const express = require('express')
const app = express();

const Types = require('./schema/types/User')
const Resolvers = require('./schema/resolvers/User')
const   db  = require('../models/index')

const { User } = db

//Arranque del servidor Apollo
const apl = async() => {
const server = new ApolloServer({
    typeDefs: Types,
    resolvers: Resolvers,
    context: {
        // // User
    }
})

 await server.start();

 server.applyMiddleware( { app } );
 
 app.listen(4000, () => {
     db.sequelize.sync();
     console.log(`🚀  Server ready at localhost:4000${server.graphqlPath}`)
 })
 
}

apl();

 


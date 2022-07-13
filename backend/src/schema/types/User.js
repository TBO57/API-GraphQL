//Dependencies
const { gql } = require('apollo-server-express')

// Type Definitions
module.exports = gql`
   
   type User {
    Id: Int,
    Nombre: String,
    Apellido: String,
    Telefono: String,
    Correo: String,
    Contrasena: String,
    Username: String,
    Rol: String
   }

   type Query {
    listarUsers: [User],
    listarUser(Id: Int!): User
   }

    type Mutation {
      createUser( 
        Nombre: String!,
        Apellido: String!,
        Telefono: String!,
        Correo: String!,
        Contrasena: String!,
        Username: String!,
        Rol: String! 
      ): User,

      updateUser(
        Id: Int!,
        Nombre: String!,
        Apellido: String!,
        Telefono: String!,
        Correo: String!,
        Contrasena: String!,
        Username: String!,
        Rol: String!  
      ): User,

      deleteUser(
        Id: Int!
      ): String!

    }
`
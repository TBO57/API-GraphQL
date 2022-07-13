import { gql } from '@apollo/client'

export const ALL_USERS = gql`
  query ListarUsers {
    listarUsers {
      Id
      Nombre
      Apellido
      Telefono
      Correo
      Contrasena
      Username
      Rol
    }
  }
`

export const FIND_USER = gql`
  query ListarUser($id: Int!) {
    listarUser(Id: $id) {
      Id
      Nombre
      Apellido
      Telefono
      Correo
      Contrasena
      Username
      Rol
    }
  }
`
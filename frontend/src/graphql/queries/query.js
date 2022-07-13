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
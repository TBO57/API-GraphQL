import { gql } from '@apollo/client'


export const CREATE_USER = gql`
mutation CreateUser($nombre: String!, $apellido: String!, $telefono: String!, $correo: String!, $contrasena: String!, $username: String!, $rol: String!) {
  createUser(Nombre: $nombre, Apellido: $apellido, Telefono: $telefono, Correo: $correo, Contrasena: $contrasena, Username: $username, Rol: $rol) {
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

export const DELETE_USER = gql`
mutation DeleteUser($id: Int!) {
  deleteUser(Id: $id)
}
`

export const UPDATE_USER = gql`
mutation UpdateUser($id: Int!, $nombre: String!, $apellido: String!, $telefono: String!, $correo: String!, $contrasena: String!, $username: String!, $rol: String!) {
  updateUser(Id: $id, Nombre: $nombre, Apellido: $apellido, Telefono: $telefono, Correo: $correo, Contrasena: $contrasena, Username: $username, Rol: $rol) {
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
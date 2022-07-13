const db = require('../../../models/index')

// Resolvers
module.exports = {
    
    Query: {
      
     listarUsers: async(_) => {
        return await db.User.findAll();
     },

     listarUser: async(_, args) => {
        return await db.User.findByPk(args.Id);
     }
    },

    Mutation: {

     async createUser(_, { Nombre, Apellido, Telefono, Correo, Contrasena, Username, Rol } ){
       return await db.User.create({
          Nombre: Nombre,
          Apellido: Apellido,
          Telefono: Telefono,
          Correo: Correo,
          Contrasena: Contrasena,
          Username: Username,
          Rol: Rol
       });
     },

     async updateUser(_, { Id, Nombre, Apellido, Telefono, Correo, Contrasena, Username, Rol } ){
      
      const user = await db.User.findByPk(Id);

      if (!user){ 
         throw new Error('Este usuario no existe')
      }

      await user.update({
        Nombre: Nombre,
        Apellido: Apellido,
        Telefono: Telefono,
        Correo: Correo,
        Contrasena: Contrasena,
        Username: Username,
        Rol: Rol
      })

      return user;
     },

     async deleteUser(_, { Id } ){

      const user = await db.User.findByPk(Id);

      if (!user){ 
         return 'Este usuario no existe'
      }

      await user.destroy();

      return "Usuario eliminado";
     } 
    }
 }


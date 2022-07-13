

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User',{
    
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      
      },
      Nombre: { 
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
         notNull: {
          msg: 'Ingrese un nombre'
         }
        } 
      },
      Apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
         notNull: {
          msg: 'Ingrese un apellido'
         }
        }
      },
      Telefono: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
         notNull: {
          msg: 'Ingrese un telefono'
         }
        }
      },
      Correo: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'Ingrese un email valido'
          }
        }
      },
      Contrasena: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
          notNull: {
           msg: 'Ingrese una contraseña'
          }
        } 
      },
      Username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
          notNull: {
           msg: 'Ingrese un username'
          }
        } 
      },
      Rol: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate:{
          notNull: {
           msg: 'Ingrese un rol'
          }
        } 
      }
   }, {
      sequelize,
      modelName: 'User',
      tableName: 'usuario',
      freezeTableName: true,
      timestamps: false
  
    });
  
    return user;
  };
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Recipe', {
    Id:{
      type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    validate: {
      isUUID: 4
    }
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len :[5,15],
        notEmpty: true,
        msg : "Es necesario un name"
      }
    },
    Img:{
      type: DataTypes.STRING,

    },
    Nivel_Saludable:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    Pasos:{
      type: DataTypes.TEXT,
      unique: true,
      allowNull:false

    },
  },
  {freezeTableName:true, 
  timestamps:false}
  );
  
};

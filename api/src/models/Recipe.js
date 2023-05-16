const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "Recipe",
    {
      Id: {
        type: DataTypes.UUID(),
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: {
          isUUID: 4,
        },
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "El plato con este nombre ya existe",
          },
          len: [5, 15],
        },
      },

      Img: DataTypes.STRING,

      Steps: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Debes ingresar una url",
          },
        },
      },

      Sumary: DataTypes.STRING,

      Health_score: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Debes asignarle un valor",
          },
        },
      },
    },

    { freezeTableName: true, timestamps: false }
  );
};

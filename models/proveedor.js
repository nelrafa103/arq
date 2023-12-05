const { DataTypes } = require("sequelize")
const sequelize = require("../db")



const Proveedor = sequelize.define("proveedor", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    nombre: DataTypes.STRING,
    direccion:DataTypes.STRING,
})

module.exports = Proveedor
const { DataTypes } = require("sequelize-cockroachdb")
const sequelize = require("../db")

const Orders = sequelize.define("order", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,

    },
    fecha: DataTypes.DATE,
    cantidad: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    id_proveedor: {
        type: DataTypes.UUID,
        references: { model: "proveedors", key: "id" }
    }
})


module.exports = Orders
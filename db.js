const Sequelize = require("sequelize")
DATABASE_URL="postgresql://blog:GXsB6g9hAqlkrZJrKSWJ9A@stone-lynx-4165.g8z.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

const sequelize = new Sequelize(DATABASE_URL, {

})

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection()

/*
 Aqui se crean las tablas
*/
/*Proveedor.sync({
    force: true
}).then(
    () => Orders.sync({
        force:true
    }).catch((e) => console.log(e.message))
).catch((err) => console.log(err.message))

*/

module.exports = sequelize
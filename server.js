const express = require('express')
const orders = require("./orders/main")
const { sequelize } = require("./db")
const Proveedor = require("./models/proveedor")
const Order = require("./models/order")
var bodyParser = require('body-parser')

const app = express()
const ejs = require('ejs');
const { or } = require('sequelize-cockroachdb')

const port = 3000

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async (req, res) => {

  const name = req.query.name;

  /*await Proveedor.create({
    id: "d1becdf7-e6a0-49c7-bc17-be9119708bcd",
    nombre: "Ferreteria Roberto Espinal",
    direccion: "Cienfuegos"
});
 */
  const proveedores = await Proveedor.findAll({
    attributes: ['id'],
    raw: true
  })

  const orders = await Order.findAll({
    raw: true
  })
 console.log(orders)
  res.render('./orders', {
    proveedores: proveedores,
    orders: orders,
  });

})

app.use("/orders", orders)

app.listen(port)
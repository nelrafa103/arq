const express = require("express")
const Orders = require('../models/order');
//const { UUID } = require("sequelize-cockroachdb");
const router = express.Router();



router.get("/get", async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al procesar ordenes' });
  }
})

router.put("/modify", async (req, res) => {
  // Change everyone without a last name to "Doe"
  try {
    const update = await Orders.update({
      fecha: req.body.fecha,
      cantidad: req.body.cantidad,
      nombre: req.body.nombre,
      id_proveedor: req.body.proveedor
    }, {
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({ message: 'Exito' });
  } catch (e) {
    console.log(e)
  }

})

router.put("/delete", async (req, res) => {
  try {
    //  const tal = 
    console.log(req.headers)
    console.log(req.body)
    const borrar = await Orders.destroy({
      where: {
        id: req.body._id
      },
    })

    console.log(borrar)
    res.status(200).json({ message: 'Exito' });

  } catch (e) {
    console.log(e.message)
  }
})

router.get("/client", (req, res) => {

})

router.post("/add", async (req, res) => {
  try {
    //  const tal = 
    console.log(req.headers)
    console.log(req.body)
    const jane = await Orders.create({
      fecha: req.body.fecha,
      cantidad: req.body.cantidad,
      nombre: req.body.nombre,
      id_proveedor: req.body.proveedor
    })
    res.json({
      saludo: "Hola mundo"
    })

  } catch (e) {
    console.log(e.message)
  }
})

module.exports = router
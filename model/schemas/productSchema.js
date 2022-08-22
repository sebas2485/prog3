/*packages */
const mongoose = require("mongoose")

/* Scheama Creation */
const productSchema = new mongoose.Schema({
    nombreProducto: {
        type: "String",
        required: true,
    },
    precio: {
        type: "Number",
        required: true,
        min: 2000,
        max: 20000000
    },
    categoria: {
        type: "String",
        required: true,
    },
    marca: {
        type: "String",
        required: true,
    },
    color: {
        type: "String",
       // required: true,
    },
    modelo: {
        type: "String",
       // required: true,
    },
    tamaño: {
        type: "String",
       // required: true,
    },
    descripcion: {
        type: "String",
      //  required: true,
    },
    duracionGarantia: {
        type: "String",
        required: true,
    },
    tiempoEnvio: {
        type: "String",
        required: true,
    },
    costoEnvio:{
        type:"Number",
        required: true,
        min:0,
        max:100000
    }
})

/* schema exportation */

module.exports = productSchema
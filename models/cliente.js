//Aca crearemos el modelo de datos del cliente
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Aqui creamos el esquema de datos del cliente
const clienteSchema = new Schema({
       cedula_Cliente: Number,
       dirreccion_Clientes:String,
       email_Cliente:String,
       nombre_Cliente: String,
       telefono_Cliente:Number,
       

});

//Llamado del Modelo

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
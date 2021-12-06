//Aca crearemos el modelo de datos del cliente
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Aqui creamos el esquema de datos del cliente
const clienteSchema = new Schema({
       nombre_usuario: String,
       apellido_usuarios: Number,
       cel_usuarios:String,
    
      
    
});

//Llamado del Modelo

const usuarios = mongoose.model('usuarios', usuarioSchema);

module.exports = usuarios;
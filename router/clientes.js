//Este es el controlador principal de clientes
const express = require('express');
const router = express.Router();
//Aca llamaremos el modelo de datos
const Cliente = require('../models/cliente');
router.get('/', async (req, res) => {
    try {
        const arrayClientesDB = await Cliente.find();
        console.log(arrayClientesDB)
        res.render("clientes", {
            arrayClientes: arrayClientesDB //Aqui igualamos la estructura de datos con lo traido de la base datos

        })

    } catch (error) {
        console.log(error)
    }

})
//Aqui vamos a llamar la vista crear de nuevos clientes
router.get('/crear', (req,res)=>{
    res.render('crear')
}) 
//Aqui vamos a llamar la ruta de los datos y conectar con la bd
router.post('/', async(req, res)=>{
    const body = req.body
    
    try{
            const clienteDB = new Cliente(body)//Aqui recibo lo que trajo boy-parser
            await clienteDB.save()//aqui lo guardo en la base datos
            console.log(body) //Aqui me muestra en consola lo que guardo en la base datos
            //await Cliente.create(body) Esta es la segunda forma de guardar datos en la base de datos
            res.redirect('/clientes')
    }catch(error){
        console.log(error)
    }
})
//Detallar el cliente y unificar un documento para editar y para borrar
router.get('/:id', async(req, res)=>{
    const id= req.params.id
    try{
        const clienteDB = await Cliente.findOne({_id: id})
        console.log(clienteDB)
        res.render('detalle',{
            cliente : clienteDB,
            error:false
        })
    }catch(error){
        res.render('detalle',{
           error: true,
           mensaje: 'No se encuentra el id escogido'
    })
}
})

//vamos a borrar el cliente con Delete
router.delete('/:id', async(req, res)=>{
    const id= req.params.id
    try {
        const clienteDB= await Cliente.findByIdAndDelete({_id: id})
        if (clienteDB) {
            res.json({
                estado: true,
                mensaje : 'Eliminado!!'
            })
        } else {
            res.json({
                estado : false,
                mensaje : 'No se pudo eliminar'
            })
        }
    } catch (error) {
        console.log(error)
    }
})
//Aqui vamos a editar los clientes creados

router.put('/:id', async (req, res)=>{
    const id = req.params.id
    const body = req.body
    try {
        const clienteDB = await Cliente.findByIdAndUpdate(
            id, body, {useFindAndModify: false}) 
            console.log(clienteDB)
            res.json({
                estado: true,
                mensaje : 'Editado'
            })

    } catch (error) {
        res.json({
            estado: false,
            mensaje : 'Ha fallado'
        })
        console.log(error)
    }
})


module.exports = router;
// construcción del servidor con Express
const express =require("express");
const bodyParser = require('body-parser');
const app = express();
const port =8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());



//Conectar a Base Datos 
const mongoose = require ('mongoose');
const usuario='';
const password='';
const dbName='tienda'; 

const uri =  `mongodb://localhost:27017/tiendagenerica`


mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('Estas conectado a la base de datos'))
.catch(e=> console.log('el error de conexión es ',e));

//Aqui el llamado al motor de plantilla ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//Aqui vamos a configurar una carpeta publica y a hacer middleware
app.use(express.static(__dirname +"/public"));
//Rutas WEB
app.use('/', require('./router/RutasWeb'));
app.use('/clientes', require('./router/clientes'));



/*
app.get("/productos", (req,res)=>{
    res.send("<h1 align=center>Hola esta la pagina de productos</h1>");
});*/

app.use((req, res, next)=>{
    res.status(404).render("404",{titulo404:"Pagina no Encontrada"});
    });
//Aca llamamos al servidorExpress
app.listen(port,()=>{
    console.log(`Este es un llamado de servidor con express al http://localhost:${port}`);
});
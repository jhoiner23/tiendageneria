const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index",{titulo: "mi titulo Dinámico Inicio "});
});
//Aca esto haciendo un llamado a una pagina dinamica en ejs y en la carpeta views
router.get("/productos", (req, res) => {
    res.render("productos",{tituloProductos: "Mí título Dinámico de Productos"});
});

router.get("/usuarios", (req, res) => {
    res.render("usuarios",{tituloUsuarios: "Mí título Dinámico de Usuarios"});
});

router.get("/login", (req, res) => {
    res.render("login");
});


module.exports = router;
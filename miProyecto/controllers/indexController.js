const data = require('../data/data');
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

const indexController = {
    inicio: function(req,res) {
        Producto.findAll()
        .then(function(products){
            return res.render('index', {products: products})
        } )
        .catch(function(err){console.log(err)})
        
       

    },

    login: function(req,res) {
        Usuario.findAll()
        .then(function(user){
            return res.render('login', {user: user})
        } )
        .catch(function(err){console.log(err)})
    },

    register: function(req,res) {
        Usuario.findAll()
        .then(function(user){
            return res.render('register', {user: user})
        } )
        .catch(function(err){console.log(err)})
    },


    results : function(req,res) {

        let search = req.query.search; //ponemos el nombre del formulario para tomar lo que llega
        let relaciones = {
            include: [
                {association:"usuario"},
                {association:"comentario"}
            ]
        }


        Producto.findAll(relaciones)
        .then(function(products){
            Comentario.findAll(
                {
                    include: [
                        {association:"usuario"},
                        {association:"producto"}

                    ]
                }
            )
            .then(function(comments) {
                Usuario.findAll()
                .then(function(user){
                    return res.render('search-results', {products: products, comments:comments})

                })
                

            })
            
        })
       
        
    }


}

module.exports = indexController;


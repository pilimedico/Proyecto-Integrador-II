const data = require('../data/data');
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const usersController = {

    profile: function(req,res) {

        Producto.findAll()
        .then(function(products){
            Usuario.findAll()
            .then(function(user){
                return res.render('profile', {user:user, products: products})

            })
        } )
        .catch(function(err){console.log(err)})


        

    },
    
    editprofile: function(req,res) {

        Usuario.findAll()
        .then(function(user){
            return res.render('profile-edit', {user: user})
        } )
        .catch(function(err){console.log(err)})


    }

}

module.exports = usersController;
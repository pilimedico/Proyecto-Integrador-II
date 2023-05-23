const data = require('../data/data');
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const usersController = {

    profile: function(req,res) {

        return res.render('profile', {user:data.user, products: data.products})

    },
    
    editprofile: function(req,res) {
        return res.render('profile-edit', {user:data.user})
    }

}

module.exports = usersController;
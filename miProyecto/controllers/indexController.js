const data = require('../data/data');
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

const indexController = {
    inicio: function(req,res) {
        return res.render('index',{products:data.products})
        
       

    },

    login: function(req,res) {
        return res.render('login')
    },

    register: function(req,res) {
        return res.render('register')
    },
    results : function(req,res) {
        return res.render('search-results', {products: data.products, comments:data.comments})
        
    }


}

module.exports = indexController;


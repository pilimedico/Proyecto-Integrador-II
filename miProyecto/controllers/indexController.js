const products = require('../db/products')

const indexController = {
    inicio: function(req,res) {
        res.render('index', {products: products.lista})

    },

    login: function(req,res) {
        res.render('login')
    },

    register: function(req,res) {
        res.render('register')
    },
    results : function(req,res) {
        res.render('search-results')
        
    }


}

module.exports = indexController;
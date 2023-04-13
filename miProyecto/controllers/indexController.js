const data = require('../data/data');

const indexController = {
    inicio: function(req,res) {
        return res.render('index', {products: data.products})

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


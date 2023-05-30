const data = require('../data/data'); //requerimos el modulo exportado anteriormente.
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

const productsController = {


    detalle:function(req,res) { 
        let id = req.params.id
        let relaciones = {
            include: [
                {association:"usuario"},
                {association:"comentario", include: {association:"usuario"}}
            ]
        }


        Producto.findByPk(id,relaciones)
        .then(function(products){
            return res.render('product', {products : products, user: [products.usuario] })
            
        }).catch(function(err) {
            console.log(err);
        })
   
    },

    add: function(req,res) {
        
        Usuario.findAll()
        .then(function(user){
            return res.render('product-add', {user: user})
        } )
        .catch(function(err){console.log(err)})


    },
    

}
module.exports = productsController;
const data = require('../data/data'); //requerimos el modulo exportado anteriormente.
const db = require("../database/models")

const productsController = {

    index: function(req,res) {
        
    },

    detalle:function(req,res) { 
        let id = req.params.id
        let relaciones = {
            include: [
                {association:"usuario"}
            ]
        }


        Producto.findByPk(id,relaciones)
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
                    return res.render('product', {id:id, product_trabajar : products, comments:comments, user:user })

                })
                

            })
            
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
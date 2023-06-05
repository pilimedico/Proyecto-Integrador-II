const data = require('../data/data'); //requerimos el modulo exportado anteriormente.
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;


const productsController = {

    index: function(req,res) {
        
    },

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
    detalleComment: function(req,res) {
        
    
        

        let comentario = {
            comentario:req.body.comentario, 
            usuario_id: req.session.Usuario.id, 
            producto_id: req.params.id, 
            
        }
        Comentario.create(comentario)
        Producto.findByPk(req.params.id)
        .then(function(products){
            return res.redirect(`/products/detalle/id/${products.id}`)
            
        }).catch(function(err) {
            console.log(err);
        })
        
        
        

    },

    add: function(req,res) {
        res.render('product-add')

    },
    postAdd: function(req,res) {
        let producto = {
            nombre:req.body.nombre, 
            descripcion:req.body.descripcion, 
            cover:req.body.cover, 
            usuario_id:  req.session.Usuario.id
        
        }
        
        Producto.create(producto)
        return res.redirect('/')
    }
    

}
module.exports = productsController;
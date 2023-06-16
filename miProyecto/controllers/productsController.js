const db = require("../database/models")
const Producto = db.Producto;
const Comentario = db.Comentario;
const Like = db.Like;


const productsController = {

    

    detalle:function(req,res) { 

        let id = req.params.id

        let relaciones = {
            include: [
                {association:"usuario"},
                {association:"comentario", include: {association:"usuario"}},
                {association:"like"}

            ], order: [[{model:Comentario, as: 'comentario'},'createdAt', 'DESC']]//le pido que me ordene el modelo de producto en base a el de comentario, y al mdoelo de comentario se lo estoy pasando como la asociacion de comentario y producto
        }


        Producto.findByPk(id,relaciones)
         .then(function(products){
            
            Comentario.findAll({where: [{id_post: products.id}] , order: [['createdAt', 'DESC']]})
            .then(function(comment){

                return res.render('product', {products : products, user: [products.usuario], comment:comment})
             })
            
        }).catch(function(err) {
            console.log(err);
        })
   
    },
    //comentarios
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
    //agregar productos
    postAdd: function(req,res) {
        let producto = {
            nombre:req.body.nombre, 
            descripcion:req.body.descripcion, 
            cover:req.body.cover, 
            usuario_id:  req.session.Usuario.id
        
        }
        
        Producto.create(producto)
        return res.redirect('/')
    },

    //editar productos
    edit: function(req,res) {
        Producto.findByPk(req.params.id)

        .then(function(product){
            return res.render('product-edit', {product:product})
             
        }).catch(function(err) {
            console.log(err);
        })
        
    },

    Postedit: function (req,res) {

        Producto.findByPk(req.params.id)

        .then(function(products){

            if (req.session.Usuario.id == products.usuario_id) {

                let producto_edit = {
                    nombre:req.body.nombre, 
                    descripcion:req.body.descripcion, 
                    cover:req.body.cover, 
                    usuario_id:  req.session.Usuario.id}
        
                 
                Producto.update(producto_edit, {where: [{id: req.params.id}]})
                return res.redirect('/') 
                    
                

            } else {
                let errors = {}
                errors.message  = "No puede editar este producto, porque no le pertenece";
                res.locals.errors = errors;
                return res.render('product-edit', {product:products})
            }

        })
        .catch(function(err) {
            console.log(err);
        })
 

    }  ,
    //eliminar productos
    PostDelete: function (req,res) {

        Producto.findByPk(req.params.id, {
            include: [
                {association:"usuario"},
                {association:"comentario", include: {association:"usuario"}}
            ]
        } )

        .then(function(products){

            if (req.session.Usuario.id == products.usuario_id) {

                Producto.destroy({where: [{ id: req.params.id}]})
                .then(function(coment) {
                    Comentario.destroy({where: [ {producto_id : req.params.id}]})
                    return res.redirect('/') 
                })
                    
            
            } else {
                let errors = {}
                errors.message  = "No puede eliminar este producto porque no le pertence";
                res.locals.errors = errors;
                return res.render('product', {products:products})
            }

        })
        .catch(function(err) {
            console.log(err);
        })
 


        
    },
    //Likes
    postLikes: function (req,res) {
        
        let likes = {

            usuario_id: req.session.Usuario.id ,
            producto_id: req.params.id

        }
        Like.create(likes)
        Producto.findByPk(req.params.id)
        .then(function(products){
            return res.redirect(`/products/detalle/id/${products.id}`)
            
        }).catch(function(err) {
            console.log(err);
        })



    }

    


}
        
module.exports = productsController;
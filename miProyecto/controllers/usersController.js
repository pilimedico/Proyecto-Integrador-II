const data = require('../data/data');
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const bcryptjs = require('bcryptjs')
const Comentario = db.Comentario;
const usersController = {

    profile: function(req,res) {
        let id = req.params.id
        

        Usuario.findByPk(id, {
            include: [
                {association:"producto"},
                {association:"comentario"}

            ]
        })
        .then(function(user){

            Producto.findAll({where:[{usuario_id : id }] , order: [['createdAt', 'DESC']]})
            .then(function(products){
                return res.render('profile',{user:user, products:products})

            })
            
        }).catch(function(err) {
            console.log(err);
        })
        


        

    },
    
    editprofile: function(req,res) {

        Usuario.findByPk(req.params.id)

        .then(function(user){
            return res.render('profile-edit', {user: user})
             
        }).catch(function(err) {
            console.log(err);
        })
        
    },

        
    Posteditprofile: function (req,res) {

        let profile_edit = {
            nombre:req.body.nombre, 
            contrasena:req.body.contrasena, 
            fotoDeperfil:req.body.fotoDeperfil, 
            fecha:  req.body.fecha,
            dni: req.body.dni
        }

         
        Usuario.update(profile_edit, {where: [{id: req.params.id}]})
        return res.redirect('/') 

        
    },
    logout: function(req,res) {
        req.session.destroy()
        res.clearCookie('usuario') 
        return res.redirect('/')
        
    }

}

module.exports = usersController;
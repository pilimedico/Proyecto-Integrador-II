const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const bcryptjs = require('bcryptjs')
const usersController = {

    profile: function(req,res) {
        let id = req.params.id
        

        Usuario.findByPk(id, {
            include: [
                {association:"producto"},
                {association:"comentario"},
                {association:"like"}

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

    //procesamos el formulario de editar el perfil via POST    
    Posteditprofile: function (req,res) {

        let passEncriptada= bcryptjs.hashSync(req.body.contrasena,req.body.contrasena.length);

        let profile_edit = {
            nombre:req.body.nombre, 
            contrasena:passEncriptada, 
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
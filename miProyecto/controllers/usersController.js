const data = require('../data/data');
const db = require("../database/models")
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const usersController = {

    profile: function(req,res) {
        let id = req.params.id
        let relaciones = {
            include: [
                {association:"producto"},

            ]
        }


        Usuario.findByPk(id, relaciones)
        .then(function(user){
            Producto.findAll({where:[{usuario_id : id }]})
            .then(function(products){
                return res.render('profile',{user:user, products:products})

            })
            
        }).catch(function(err) {
            console.log(err);
        })
        


        

    },
    
    editprofile: function(req,res) {

        Usuario.findAll()
        .then(function(user){
            return res.render('profile-edit', {user: user})
        } )
        .catch(function(err){console.log(err)})


    },
    logout: function(req,res) {
        req.session.destroy()
        res.clearCookie('usuario') 
        return res.redirect('/')
        
    }

}

module.exports = usersController;
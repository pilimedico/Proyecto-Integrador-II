const data = require('../data/data');
const db = require("../database/models")
const bcryptjs = require('bcryptjs')
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;


const indexController = {
    inicio: function(req,res) {
        Producto.findAll()
        .then(function(products){
            return res.render('index', {products: products})
        } )
        .catch(function(err){console.log(err)})
        
       

    },

    login: function(req,res) {
       
            return res.render('login')
        
    },
    /* loginPost: function(req,res){
        // return res.send("procesando login");
        let mail = req.body.mail
        Usuario.findOne({where: {email:mail}}) 
        .then(function(result) {
            //recibis todo el objeto del usuario en result, entonces comparas que la contraseña sea igual con el compareSync
            if(result){
                //chequear la contraseña
                    //cargar al usuario en session
                    req.session.user = { nombre: "carla"}
                    console.log(result);
                    return res.send(req.session)
                    //  y redirigirlo al perfil
            }
        })

    }, */
    register:function (req,res) {
        return res.render('register')
    },

    postRegister: function(req,res) {
        
        let errors = {};
        if(req.body.nombre == ""){
            errors.message  = "El campo nombre esta vacio";
            res.locals.errors = errors
            res.render('register')

        } else if (req.body.email == ""){
            errors.message  = "El campo email esta vacio";
            res.locals.errors = errors
            res.render('register')

        } else if (req.body.contrasena == ""){
            errors.message  = "El campo contraseña esta vacio";
            res.locals.errors = errors
            res.render('register')

        } else {
            let criterio  = {
                where: [{email : req.body.email}] //ver si el mail existe dentro de la base de datos
            }
            Usuario.findOne(criterio) 
            .then(function(user) { //agregamos la propiedad de error y decimos que el email ya existe 

                errors.message = "El email ya existe!"
                res.locals.errors = errors;
                res.redner('register')


                
                
            }).catch(function(error) {
                console.log(error);
            })
            

            let passEncriptada= bcryptjs.hashSync(req.body.password,12);
            let usuario = {
            nombre:req.body.nombre, //allowNull: false
            email:req.body.email, //allowNull: false
            contrasena:passEncriptada, //allowNull: false
            fotoDeperfil: req.body.fotoDeperfil,
            fecha: req.body.date ,
            dni: req.body.dni 
        }
                
       Usuario.create(usuario);
       return res.redirect('/users/profile');

        }

        
        
    },


    results : function(req,res) {

        let relaciones = {
            include: [
                {association:"usuario"},
                {association:"comentario" , include: {association:"usuario"}}
            ]
        }

        Producto.findAll(relaciones)
        .then(function(products){
            return res.render('search-results', {products:products})
        } )
        .catch(function(err){console.log(err)})
        
       

    }

       
        
    }


module.exports = indexController;


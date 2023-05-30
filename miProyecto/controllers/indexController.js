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
    loginPost: function(req,res){
        Usuario.findOne(
            {where: [{email: req.body.email}]}
            )
        .then(function (results) {
            // si encuentra algo va a ser true de lo contrario sera false
            if(results){
        //si encuentra el mail checkeamos si coincide la contra
                let check = bcryptjs.compareSync(req.body.password, results.contrasena) //estod evuelve true si coincide la contraseña del formulario con la de la base de datos
                
                if(check){
                    req.session.Usuario = results.dataValues; 
                    if (req.body.recordarme){
                        res.cookie('usuario', results.dataValues.id, {maxAge: 1000 * 60 * 5})
                    }
                    return res.redirect('/')
                }
                else{
                    return res.render("login")
                }
            }
        })
    },


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
    
            Usuario.findOne({email : req.body.email}) 
            .then(function(resultado) { //agregamos la propiedad de error y decimos que el email ya existe 

                errors.message = "El email ya existe!"
                res.locals.errors = errors;
                res.render('register')

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
       return res.redirect('/login');

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


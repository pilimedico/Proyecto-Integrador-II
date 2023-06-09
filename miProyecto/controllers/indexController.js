const db = require("../database/models")
const bcryptjs = require('bcryptjs')
const Producto = db.Producto;
const Usuario = db.Usuario;
const op = db.Sequelize.Op;


const indexController = {


    
       

    inicio: function(req,res) {
        
        Producto.findAll( {order: [['createdAt', 'DESC']], include: [
            {association:"usuario"},
            {association:"comentario", include: [{association:"usuario"}]}
        ] })
            
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
                let check = bcryptjs.compareSync(req.body.password, results.contrasena) //esto devuelve true si coincide la contraseña del formulario con la de la base de datos
                
                if(check){
                    req.session.Usuario = results.dataValues; 
                    if (req.body.recordarme){
                        res.cookie('usuario', results.dataValues.id, {maxAge: 1000 * 60 * 5})
                    }
                    return res.redirect('/')
                }
                else{
                    let errors = {};
                    errors.message = "Usuario o contraseña incorrectos"
                    res.locals.errors = errors;
                    return res.render("login")
                }
            } else {
                    let errors = {};
                    errors.message = "Este mail no está registrado"
                    res.locals.errors = errors;
                    return res.render("login")
            }
        })
    },


    register:function (req,res) {
        return res.render('register')
    },

    postRegister: function(req,res) {

        Usuario.findOne({where: [{email : req.body.email}]}) //que busque un usuario donde coincide lo que llega por el formulario con el mail en la base de datos
        
        .then(function(resultado) { 

            let errors = {}
  

                //si encuentra un resultado es porque el mail ya esta registrado en la base de datos
                if (resultado) {

                errors.message = "El email ya existe!"
                res.locals.errors = errors;
                res.render('register')

                }else if(req.body.nombre == ""){
                    errors.message  = "El campo nombre esta vacio";
                    res.locals.errors = errors
                    res.render('register')
        
                } else if (req.body.contrasena == ""){
                    errors.message  = "El campo contraseña esta vacio";
                    res.locals.errors = errors;
                    res.render('register')
        
                }

                 else if (req.body.contrasena.length < 3) {
                    errors.message  = "La contraseña debe tener 3 o más caracteres ";
                    res.locals.errors = errors;
                    res.render('register')
                } 
                else{
                //si no se cumple ninguna de las restricciones anteriores, agrega al usuario en la db
                let passEncriptada= bcryptjs.hashSync(req.body.contrasena,req.body.contrasena.length);
                let usuario = {
                    nombre:req.body.nombre, 
                    email:req.body.email, 
                    contrasena:passEncriptada, 
                    fotoDeperfil: req.body.fotoDeperfil,
                    fecha: req.body.date ,
                    dni: req.body.dni 
                }
                Usuario.create(usuario);
                return res.redirect('/login');
                }

            }).catch(function(error) {
                console.log(error);
            })
            
            
            
        },
    //resultado de busqueda de productos            
    results : function(req,res) {


        let busqueda = req.query.search;
        let relaciones = {
            include: [
                {association:"usuario"},
                {association:"comentario"}
            ] 
        }
        let criterio = {
            where: {
                [op.or]: [{
                      nombre: {
                         [op.like]: "%"+busqueda+"%"
                      }
                   },
                   {
                      descripcion: {
                         [op.like]: "%"+busqueda+"%"
                      }
                   }
                ]
             },
            order:[
                ['createdAt', 'DESC']]
            
            }
        

        Producto.findAll(criterio,relaciones)
        .then(function(products){
            return res.render('search-results', {products : products})

            
        }).catch(function(err) {
            console.log(err);
        })
       
        
       

    },
    //resultado de busqueda de usuarios    
    resultsUser: function(req,res) {
        let busqueda = req.query.search;
        let criterio = {
            where: {
                [op.or]: [{
                      nombre: {
                         [op.like]: "%"+busqueda+"%"
                      }
                   },
                   {
                      email: {
                         [op.like]: "%"+busqueda+"%"
                      }
                   }
                ]
             }
            
            }
            

        Usuario.findAll(criterio)

            .then(function(user){

                

                return res.render('searchresults-user', {user : user})
                            
                        
                         
            }).catch(function(err) {
                console.log(err);
            })    

        
    }

    
    
    }


module.exports = indexController;


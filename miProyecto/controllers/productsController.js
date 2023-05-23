const data = require('../data/data'); //requerimos el modulo exportado anteriormente.
const db = require("../database/models")

const productsController = {

    index: function(req,res) {
        
    },

    detalle:function(req,res) { 

        id = req.params.id //guardamos el id que viene ingresado como parametro obligatorio en la ruta, en una variable "id"
        for (let i = 0; i < data.products.length; i++) { //creamos un for para recorrer cada objeto literal de data.products (cada producto)
            if (id == data.products[i].id){   //si el id ingresado coincide con con el id del objeto literal (del producto)
                product_trabajar = data.products[i] 
                //entonces especificamos que vamos a trabajar con ese objeto literal, para que se muestre ese mismo en los detalles de producto
            }
            
        }

        return res.render('product', {id:id, product_trabajar : product_trabajar, comments:data.comments, user:data.user } )
        
    },
    add: function(req,res) {
        return res.render('product-add', {user:data.user}) // ultilizamos el metodo .render() para enviar la vista al navegador
        //pasamos como primer parametro un string con el nombre de la vista que queremos renderizar
        // y como segundo parametro un objeto literal donde almacenamos la información que queremos enviar junto con la vista que estemos renderizando. 
        


    },
    

}
module.exports = productsController;
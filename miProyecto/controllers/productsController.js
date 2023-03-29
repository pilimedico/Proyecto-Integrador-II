const productsController = {

    detalle:function(req,res) {
        id = req.params.id
        for (let i = 0; i < products.lista.length; i++) {
            if (id == products.lista[i].id){
                product_trabajar = products.lista[i]
            }
            
        }

        res.render('product', {id:id, products: products.lista, product_trabajar : product_trabajar} )
        
    },
    add: function(req,res) {
        res.render('product-add')
    },
    /* edit: function(req,res) {
        
    } */

}
module.exports = productsController;
const productsController = {

    index: function(req,res) {
        
    },

    detalle:function(req,res) {
        id = req.params.id
        for (let i = 0; i < data.products.length; i++) {
            if (id == data.products[i].id){
                product_trabajar = data.products[i]
            }
            
        }

        res.render('product', {id:id, products: data.products, product_trabajar : product_trabajar, comments:data.comments, user:data.user } )
        
    },
    add: function(req,res) {
        res.render('product-add', {user:data.user})
    },
    /* edit: function(req,res) {
        
    } */

}
module.exports = productsController;
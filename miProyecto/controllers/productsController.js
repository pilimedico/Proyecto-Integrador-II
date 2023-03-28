const productsController = {

    detalle:function(req,res) {
        res.render('product')
        
    },
    add: function(req,res) {
        res.render('product-add')
    },
    /* edit: function(req,res) {
        
    } */

}
module.exports = productsController;
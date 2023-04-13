const data = require('../data/data');
const usersController = {

    profile: function(req,res) {

        return res.render('profile', {user:data.user, products: data.products})

    },
    
    editprofile: function(req,res) {
        return res.render('profile-edit', {user:data.user})
    }

}

module.exports = usersController;
const usersController = {

    profile: function(req,res) {
        res.render('profile')
    },
    
    editprofile: function(req,res) {
        res.render('profile-edit')
    }

}

module.exports = usersController;
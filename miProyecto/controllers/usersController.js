const usersController = {

    profile: function(req,res) {

        return res.render('profile', {user:data.user})

    },
    
    editprofile: function(req,res) {
        return res.render('profile-edit')
    }

}

module.exports = usersController;
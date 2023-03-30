const usersController = {

    profile: function(req,res) {
        function guardarDatos() {
            var name = document.getElementById('name').value
        }
    
        res.render('profile', {name:name})

    },
    
    editprofile: function(req,res) {
        res.render('profile-edit')
    }

}

module.exports = usersController;
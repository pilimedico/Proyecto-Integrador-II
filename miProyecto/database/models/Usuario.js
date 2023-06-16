module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: false,
        } ,
        email:  {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true

        },
        contrasena: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fotoDeperfil: {
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        createdAt:{ 
            type: dataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        }
    
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }
    const Usuario = sequelize.define(alias,cols,config); 
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto , {
            as: 'producto',
            foreignKey: 'usuario_id' 
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'usuario_id'
        })
        Usuario.hasMany(models.Like, {
            as: 'like',
            foreignKey: 'usuario_id'
        })
        
        
    }
    return Usuario;


}
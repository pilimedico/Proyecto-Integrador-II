module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        email:  {
            type: dataTypes.STRING(200),
            allowNull: false,
            unique: true

        },
        contrasena: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        fotoDeperfil: {
            type: dataTypes.STRING(200)
        },
        fecha:{
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        created_at:{ 
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    
    };
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }
    const Usuario = sequelize.define(alias,cols,config); 
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto , {
            as: 'productos',
            foreignKey: 'usuario_id' 
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuario_id'
        })
        
        
    }
    return Usuario;


}
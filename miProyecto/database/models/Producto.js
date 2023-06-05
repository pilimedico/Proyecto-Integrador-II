module.exports = function(sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        nombre:  {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cover: {
            type: dataTypes.STRING
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        createdAt:{ 
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        }
    
    };
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }
    const Producto = sequelize.define(alias,cols,config); 
    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario , {
            as: 'usuario',
            foreignKey: 'usuario_id' //aclaramos en la relacion que usuario_id es una clave foranea relacionada a la tabla de usuarios
        })
        Producto.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'producto_id'
        })
        
        
    }

    return Producto;


}
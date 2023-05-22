module.exports = function(sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        nombre:  {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        usuario_id: {
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
        tableName: "productos",
        timestamps: false,
        underscored: true
    }
    const Producto = sequelize.define(alias,cols,config); 
    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario , {
            as: 'usuarios',
            foreignKey: 'usuario_id' //aclaramos en la relacion que usuario_id es una clave foranea relacionada a la tabla de usuarios
        })
        Producto.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'producto_id'
        })
        
        
    }

    return Producto;


}
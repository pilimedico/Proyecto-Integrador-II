module.exports = function(sequelize, dataTypes) {
    let alias = "Like";
    let cols = {
        id_post: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        producto_id:{
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
        tableName: "likes",
        timestamps: true,
        underscored: false
    }
    const Like = sequelize.define(alias,cols,config); 
    Like.associate = function(models){
        Like.belongsTo(models.Producto , {
            as: 'producto',
            foreignKey: 'producto_id' 
        })
        Like.belongsTo(models.Usuario , {
            as: 'usuario',
            foreignKey: 'usuario_id' 
        })
        
        
        
    }
    return Like;


}
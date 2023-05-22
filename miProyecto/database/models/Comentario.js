module.exports = function(sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id_post: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        comentario:  {
            type: dataTypes.TEXT
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        producto_id:{
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
        tableName: "comentarios",
        timestamps: false,
        underscored: true
    }
    const Comentario = sequelize.define(alias,cols,config); 
    return Comentario;


}
create schema miProyecto;

use miProyecto;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
contrasena varchar(250)  not null,
fotoDeperfil varchar(200),
fecha date,
dni int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);
/* cunadoe ejecutas un create de nuevo te tira error*/
/* me daba error por poner text y constraint unique */
/* los campos escribirlos siempre en misuscula */
/* comentarios campo text*/